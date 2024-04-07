using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services {
    public class TokenService : ITokenService {

        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config){
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        
        public string SCreateToken(ForStudent forStudent){
            
            var sclaims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, forStudent.StudentId),
                new Claim(ClaimTypes.Role, "Student")
            };
            var screds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var stokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(sclaims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = screds
            };
            var stokenHandler = new JwtSecurityTokenHandler();
            var stoken = stokenHandler.CreateToken(stokenDescriptor);
            return stokenHandler.WriteToken(stoken);
        }

        public string WCreateToken(ForWardan forWardan){
                        
            var wclaims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, forWardan.WardanId),
                new Claim(ClaimTypes.Role, "Warden")
            };
            var wcreds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var wtokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(wclaims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = wcreds
            };
            var wtokenHandler = new JwtSecurityTokenHandler();
            var wtoken = wtokenHandler.CreateToken(wtokenDescriptor);
            return wtokenHandler.WriteToken(wtoken);
        }

    }
}