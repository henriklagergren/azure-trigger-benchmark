using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using System.Collections.Generic;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class HttpTrigger
  {
    private readonly TelemetryClient telemetryClient;
    private static int count;


    public HttpTrigger(TelemetryConfiguration telemetryConfiguration)
    {
      this.telemetryClient = new TelemetryClient(telemetryConfiguration);
    }


    [FunctionName("HttpTrigger-dotnet")]
    public async Task<IActionResult> Run(
          [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
          ILogger log)
    {
      var envInstance = Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID");

      count++;

      this.telemetryClient.TrackTrace(
          message: "Coldstart details",
          properties: new Dictionary<string, string> {
            {"iteration_id", count.ToString()},
            {"instance_id", envInstance},
            {"operation_id", System.Diagnostics.Activity.Current.RootId}
          }
    );

      this.telemetryClient.TrackDependency(
        dependencyName: "Custom operationId http",
        target: "http://",
        dependencyTypeName: "HTTP",
        data: "",
        startTime: DateTime.Now,
        duration: TimeSpan.FromMilliseconds(10),
        resultCode: "200",
        success: true
      );

      return new OkObjectResult("success");
    }
  }
}
