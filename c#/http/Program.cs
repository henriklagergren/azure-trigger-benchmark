using System.Threading.Tasks;
using Pulumi;

class ProgramHttp
{
  static Task<int> Main() => Deployment.RunAsync<HttpStack>();
}
