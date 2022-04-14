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

namespace dotnet
{
  public class EventGridTrigger
  {
    private readonly TelemetryClient telemetryClient;

    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public EventGridTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
    [FunctionName("EventGridTrigger-dotnet")]
    public static void Run([EventGridTrigger] EventGridEvent eventGridEvent, ILogger log)
    {

      var config = TelemetryConfiguration.CreateDefault();
      var telemetry = new TelemetryClient(config);

      var innvocationId = JObject.Parse(eventGridEvent.Data.ToString())["url"].ToString().Split("/");

      telemetry.TrackDependency(
      target: "http://",
      dependencyName: "Custom operationId eventGrid",
      dependencyTypeName: "HTTP",
      resultCode: "200",
      success: true,
      startTime: DateTime.Now,
      data: innvocationId.GetValue(innvocationId.Length - 1).ToString(),
      duration: TimeSpan.FromMilliseconds(10)
    );
    }
  }
}
