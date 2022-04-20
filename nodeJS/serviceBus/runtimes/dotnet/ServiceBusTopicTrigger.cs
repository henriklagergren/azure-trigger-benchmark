using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;

namespace dotnet
{
  public class ServiceBusTopicTrigger
  {
    private readonly ILogger<ServiceBusTopicTrigger> _logger;

    private readonly TelemetryClient telemetryClient;

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

      var config = TelemetryConfiguration.CreateDefault();
      var telemetry = new TelemetryClient(config);


      telemetry.TrackDependency(
      target: "http://",
      dependencyName: "Custom operationId serviceBusTopic",
      dependencyTypeName: "HTTP",
      resultCode: "200",
      success: true,
      startTime: DateTime.Now,
      data: mySbMsg.Replace("|", "").Split(".")[0].Replace("\"", ""),
      duration: TimeSpan.FromMilliseconds(10)
    );
    }
  }
}
