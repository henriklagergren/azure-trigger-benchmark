using System;
using System.Collections.Generic;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class ServiceBusTopicTrigger
  {
    private readonly ILogger<ServiceBusTopicTrigger> _logger;

    private readonly TelemetryClient telemetryClient;

    private static int count;

    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public ServiceBusTopicTrigger(TelemetryConfiguration telemetryConfiguration, ILogger<ServiceBusTopicTrigger> log)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
      _logger = log;
    }

    [FunctionName("ServiceBusTopicTrigger-dotnet")]
    public void Run([ServiceBusTrigger("%TOPIC_NAME%", "%TOPIC_SUBSCRIPTION_NAME%", Connection = "SERVICE_BUS_NAMESPACE_CONNECTION")] string mySbMsg)
    {
      _logger.LogInformation($"C# ServiceBus topic trigger function processed message: {mySbMsg}");

      var invocationId = mySbMsg.Replace("|", "").Split(".")[0].Replace("\"", "");
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
      dependencyName: "Custom operationId serviceBusTopic",
      dependencyTypeName: "HTTP",
      resultCode: "200",
      success: true,
      startTime: DateTime.Now,
      data: invocationId,
      duration: TimeSpan.FromMilliseconds(10)
    );
    }
  }
}
