using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System.Configuration;
using PlanePort.Data;
using PlanePort.Models;
using PlanePort.Data.Repositories;
using PlanePort.Data.Abstract;
using PlanePort.Services;

var builder = WebApplication.CreateBuilder(args);

IConfiguration configuration = builder.Configuration;
var connectionString = configuration.GetConnectionString("DefaultConnection");

IServiceCollection services = builder.Services;

services.AddControllersWithViews();
services.AddDbContext<PlanePortContext>(options => 
    options.UseSqlServer(
        connectionString,
        o => o.MigrationsAssembly("PlanePort"))
    );

services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer( options => 
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(configuration.GetValue<string>("JWTSecretKey"))
                )
            };
        }
    );

services.AddScoped<IUserRepository, UserRepository>();

        services.AddSingleton<IAuthService>(
            new AuthService(
                configuration.GetValue<string>("JWTSecretKey"),
                configuration.GetValue<int>("JWTLifespan")
            )
        );


services.AddMvc();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseHttpsRedirection();
// app.UseIdentityServer();
app.UseAuthorization();

app.MapFallbackToFile("index.html");

app.Run();
