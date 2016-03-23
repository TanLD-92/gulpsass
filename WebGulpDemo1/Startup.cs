using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebGulpDemo1.Startup))]
namespace WebGulpDemo1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
