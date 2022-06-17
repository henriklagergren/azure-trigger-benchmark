using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.EventHubs;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Extensibility;

namespace dotnet
{
  public class EventHubTrigger
  {
    private readonly TelemetryClient telemetryClient;

    private static int count;

    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public EventHubTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
    [FunctionName("EventHubTrigger-dotnet")]
    public async Task Run([EventHubTrigger("%EVENT_HUB_NAME%", Connection = "EVENT_HUB_CONNTECTION_STRING")] EventData[] events, ILogger log)
    {
      var exceptions = new List<Exception>();

      foreach (EventData eventData in events)
      {
        string messageBody = Encoding.UTF8.GetString(eventData.Body.Array, eventData.Body.Offset, eventData.Body.Count);

        // Replace these two lines with your processing logic.
        log.LogInformation($"C# Event Hub trigger function processed a message: {messageBody}");

        var invocationId = messageBody.Replace("\"", "");
        var envInstance = Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID");

        count++;

        this.telemetryClient.TrackTrace(
            message: "Coldstart details",
            properties: new Dictionary<string, string> {
            {"iteration_id", count.ToString()},
            {"instance_id", envInstance},
            {"operation_id", invocationId}
            }
      );

        this.telemetryClient.TrackDependency(
        target: "http://",
        dependencyName: "Custom operationId eventHub",
        dependencyTypeName: "HTTP",
        resultCode: "200",
        success: true,
        startTime: DateTime.Now,
        data: invocationId,
        duration: TimeSpan.FromMilliseconds(10)
        );
      }

      // Once processing of the batch is complete, if any messages in the batch failed processing throw an exception so that there is a record of the failure.
      /*
            if (exceptions.Count > 1)
              throw new AggregateException(exceptions);

            if (exceptions.Count == 1)
              throw exceptions.Single();
              */
    }
  }
}
