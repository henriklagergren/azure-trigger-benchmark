# Init Shared
cd shared/ && npm install

cd ..

# Init Infra
cd infra/ && npm install

cd ..

# Init HTTP Trigger
cd http/ && npm install

cd ..

# Init Storage Trigger
cd storage/ && npm install

cd ..

# Init Database Trigger
cd database/ && npm install

cd ..

# Init Event Grid Trigger
cd eventGrid/ && npm install

cd ..

# Init Event Hub Trigger
cd eventHub/ && npm install

cd ..

# Init Service Bus Trigger
cd serviceBus/ && npm install

cd ..

# Init Queue Trigger
cd queue/ && npm install

cd ..

# Init Timer Trigger
cd timer/ && npm install

cd ..

# Init HTTP Trigger
cd http/runtimes/node && npm install
npm run build && func extensions install
cd ..
cd dotnet
dotnet build
cd ../../..

# Init Storage Trigger
cd storage/runtimes/node && npm install
npm run build && func extensions install

cd ../../..

# Init Database Trigger
cd database/runtimes/node && npm install
npm run build && func extensions install

cd ..
cd dotnet
dotnet build

cd ../../..

# Init Event Grid Trigger
cd eventGrid/runtimes/node && npm install
npm run build && func extensions install

cd ..
cd dotnet
dotnet build

cd ../../..