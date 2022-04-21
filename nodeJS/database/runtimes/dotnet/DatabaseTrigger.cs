using System;
using System.Collections.Generic;
using Microsoft.Azure.Documents;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.ApplicationInsights;
using Newtonsoft.Json.Linq;

namespace dotnet
{
    public class DatabaseTrigger
    {
        private readonly TelemetryClient telemetryClient;

        /// Using dependency injection will guarantee that you use the same configuration for telemetry collected automatically and manually.
        public DatabaseTrigger(TelemetryConfiguration telemetryConfiguration)
        {
            this.telemetryClient = new TelemetryClient(telemetryConfiguration);
        }
        [FunctionName("DatabaseTrigger-dotnet")]
        public static void Run([CosmosDBTrigger(
            databaseName: "%DATABASE_NAME%",
            collectionName: "%CONTAINER_NAME%",
            ConnectionStringSetting = "DATABASE_CONNECTION_STRING",
            LeaseCollectionName = "leases",
            CreateLeaseCollectionIfNotExists = true,
            MaxItemsPerInvocation = 1,
            CheckpointDocumentCount = 1)]IReadOnlyList<Document> input,
            ILogger log)
        {
            var config = TelemetryConfiguration.CreateDefault();
            var telemetry = new TelemetryClient(config);

            telemetry.TrackDependency(
              dependencyName: "Custom operationId database",
              target: "http://",
              dependencyTypeName: "HTTP",
              data: JObject.Parse(input[0].ToString())["newOperationId"].ToString(),
              startTime: DateTime.Now,
              duration: TimeSpan.FromMilliseconds(10),
              resultCode: "200",
              success: true
            );
        }
    }
}
