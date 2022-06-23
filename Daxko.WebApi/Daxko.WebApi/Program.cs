using System.Text;
using Daxko.WebApi.Data.Entity.Model;
using Daxko.WebApi.Data.Sql;
using Daxko.WebApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Daxko.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false).Build();

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddDbContext<DaxkoDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddCors(o =>
            {
                //o.AddPolicy("AllowAll", x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
                o.AddDefaultPolicy(x => x.WithOrigins("http://localhost:7000", "https://localhost:7000").AllowAnyMethod().AllowAnyHeader());
            });

            builder.Services.AddTransient<IGiftConfigurationService, GiftConfigurationService>();
            builder.Services.AddTransient<IDonationService, DonationService>();

            builder.Services.AddTransient<IGiftVendorApiService, GiftVendorApiService>();
            builder.Services.AddTransient<ILetterApiService, LetterApiService>();
            builder.Services.AddTransient<IPaymentApiService, PaymentApiService>();
            

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.UseCors();
            //app.UseCors("AllowAll");

            app.UseDeveloperExceptionPage();

            app.Run();
        }
    }
}