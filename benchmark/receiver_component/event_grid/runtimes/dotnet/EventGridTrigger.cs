// Default URL for triggering event grid function in the local environment.
// http://localhost:7071/runtime/webhooks/EventGrid?functionName={functionname}
using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Azure.EventGrid.Models;
using Microsoft.Azure.WebJobs.Extensions.EventGrid;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Extensibility;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;


namespace dotnet
{
  public class EventGridTrigger
  {
    private readonly TelemetryClient telemetryClient;

    private static int count;

    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public EventGridTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
    [FunctionName("EventGridTrigger-dotnet")]
    public void Run([EventGridTrigger] EventGridEvent eventGridEvent, ILogger log)
    {
      var invocationId = JObject.Parse(eventGridEvent.Data.ToString())["url"].ToString().Split("/");
      var envInstance = Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID");

      count++;

      this.telemetryClient.TrackTrace(
          message: "Coldstart details",
          properties: new Dictionary<string, string> {
            {"iteration_id", count.ToString()},
            {"instance_id", envInstance},
            {"operation_id", invocationId.GetValue(invocationId.Length - 1).ToString()}
          }
    );

      this.telemetryClient.TrackDependency(
      target: "http://",
      dependencyName: "Custom operationId eventGrid",
      dependencyTypeName: "HTTP",
      resultCode: "200",
      success: true,
      startTime: DateTime.Now,
      data: invocationId.GetValue(invocationId.Length - 1).ToString(),
      duration: TimeSpan.FromMilliseconds(10)
    );
    }
  }
}
