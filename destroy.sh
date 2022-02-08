cd http/

pulumi stack select trigger

pulumi destroy -f -y

cd ..
cd shared/

pulumi stack select shared

pulumi destroy -f -y

cd ..
cd infra/

pulumi stack select infra

pulumi destroy -f -y