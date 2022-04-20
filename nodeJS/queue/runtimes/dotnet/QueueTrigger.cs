using System;
using System.Collections.Generic;
using Microsoft.Azure.Documents;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.Azure.WebJobs.Logging.ApplicationInsights;
using Microsoft.ApplicationInsights;
using Newtonsoft.Json.Linq;

namespace dotnet
{
  public class QueueTrigger
  {
    private readonly TelemetryClient telemetryClient;

    public QueueTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }


    [FunctionName("QueueTrigger-dotnet")]
    public void Run([QueueTrigger("%QUEUE_NAME%", Connection = "QUEUE_CONNECTION_STRING")] string invocationId, ILogger log)
    {
      var config = TelemetryConfiguration.CreateDefault();
      var telemetry = new TelemetryClient(config);

      telemetry.TrackDependency(
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
