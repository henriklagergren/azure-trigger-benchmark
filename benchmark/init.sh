# Init Shared
cd shared_resources/ && npm install

cd ..

# Init Infra
cd invocation_component/ && npm install

cd ..

# Init HTTP Trigger
cd receiver_component/http/ && npm install

cd ..

# Init Storage Trigger
cd blob_storage/ && npm install

cd ..

# Init Database Trigger
cd database/ && npm install

cd ..

# Init Event Grid Trigger
cd event_grid/ && npm install

cd ..

# Init Event Hub Trigger
cd event_hub/ && npm install

cd ..

# Init Service Bus Trigger
cd service_bus_topic/ && npm install

cd ..

# Init Queue Trigger
cd queue_storage/ && npm install

cd ..

# Init HTTP Trigger
cd http/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Storage Trigger
cd blob_storage/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Queue Trigger
cd queue_storage/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Database Trigger
cd database/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Event Grid Trigger
cd event_grid/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Event Hub Trigger
cd event_hub/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Service Bus Topic Trigger
cd service_bus_topic/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..