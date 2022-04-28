using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.Azure.WebJobs.Logging.ApplicationInsights;
using Microsoft.ApplicationInsights;
using Newtonsoft.Json;

namespace dotnet
{
    public class HttpTrigger
    {
        private readonly TelemetryClient telemetryClient;

        public HttpTrigger(TelemetryConfiguration telemetryConfiguration)
        {
            this.telemetryClient = new TelemetryClient(telemetryConfiguration);
        }


        [FunctionName("HttpTrigger-dotnet")]
        public async Task<IActionResult> Run(
              [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
              ILogger log)
        {

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
