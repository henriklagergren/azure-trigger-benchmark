using System;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class BlobTrigger
  {
    private readonly TelemetryClient telemetryClient;

    /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
    public BlobTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }
    [FunctionName("BlobTrigger")]
    public void Run([BlobTrigger("STORAGE_CONTAINER_PATH", Connection = "BLOB_CONNECTION_STRING")] Stream myBlob, string name, ILogger log)
    {
      log.LogInformation($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

      var config = TelemetryConfiguration.CreateDefault();
      var telemetry = new TelemetryClient(config);

      telemetry.TrackDependency(
        dependencyName: "Custom operationId storage",
        target: "http://",
        dependencyTypeName: "HTTP",
        data: name,
        startTime: DateTime.Now,
        duration: TimeSpan.FromMilliseconds(10),
        resultCode: "200",
        success: true
      );
    }
  }
}
