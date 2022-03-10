import http from 'k6/http';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 10,
  duration: '10s'
}

export default () => {
  http.get('https://infraendpoint8778df01.azurewebsites.net/api/InfraEndpoint?trigger=storage&input=containerbc1d35c1,account4a49d60');
}