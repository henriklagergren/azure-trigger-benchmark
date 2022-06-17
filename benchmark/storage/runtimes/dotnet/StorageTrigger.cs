using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class StorageTrigger
  {
    private readonly TelemetryClient telemetryClient;

    private static int count;


    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public StorageTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
    [FunctionName("StorageTrigger-dotnet")]
    public void Run([BlobTrigger("%STORAGE_CONTAINER_PATH%", Connection = "STORAGE_CONNECTION_STRING")] Stream myBlob, string name, IDictionary<string, string> metaData, ILogger log)
    {
      var invocationId = metaData["operationId"].Replace("|", "").Split(".")[0];
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
        dependencyName: "Custom operationId storage",
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
