pulumi stack select dev

pulumi destroy -f -y

pulumi stack select shared

pulumi destroy -f -y

pulumi stack select infra

pulumi destroy -f -y