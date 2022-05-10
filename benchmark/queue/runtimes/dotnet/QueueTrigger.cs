using System;
using System.Collections.Generic;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class QueueTrigger
  {
    private readonly TelemetryClient telemetryClient;
    private static int count;


    public QueueTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }


    [FunctionName("QueueTrigger-dotnet")]
    public void Run([QueueTrigger("%QUEUE_NAME%", Connection = "QUEUE_CONNECTION_STRING")] string invocationId, ILogger log)
    {

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
      dependencyName: "Custom operationId queue",
      target: "http://",
      dependencyTypeName: "HTTP",
      data: invocationId,
      startTime: DateTime.Now,
      duration: TimeSpan.FromMilliseconds(10),
      resultCode: "200",
      success: true
    );
    }
  }
}
