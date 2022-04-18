using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using PlanePort.Models;
using CryptoHelper;

namespace PlanePort.Services
{
    public class AuthService : IAuthService 
    {
        private string jwtSecret;
        private int jwtLifespan;

        public AuthService(string jwtSecret, int jwtLifespan)
        {
            this.jwtSecret = jwtSecret;
            this.jwtLifespan = jwtLifespan;
        }

        public AuthData GetAuthData(string id)
        {
            var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
              Subject = new System.Security.Claims.ClaimsIdentity(
                  new [] {
                      new Claim(ClaimTypes.Name, id)
                  }),
                  Expires = expirationTime,
                  SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
                        SecurityAlgorithms.HmacSha256Signature
                  )  
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

            return new AuthData {
                Token = token,
                TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
                Id = id
            };
        }

        public string HashPassword(string password)
        {
            return Crypto.HashPassword(password);
        }

        public bool VerifyPassword(string actualPassword, string hashedPassword)
        {
            return Crypto.VerifyHashedPassword(hashedPassword, actualPassword);
        }

    }

}