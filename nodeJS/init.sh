cd shared/ && npm install

cd ..

cd infra/ && npm install

cd ..

cd http/ && npm install

cd ..

cd storage/ && npm install

cd ..

cd database/ && npm install

cd ..

cd eventGrid/ && npm install

cd ..

cd eventHub/ && npm install

cd ..

cd serviceBus/ && npm install

cd ..

cd queue/ && npm install

cd ..

cd timer/ && npm install

cd ..

cd http/triggers/node && npm install
npm run build && func extensions install

cd ../../..


cd database/runtimes/node && npm install
npm run build && func extensions install

cd ../../..