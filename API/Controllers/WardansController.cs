using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers {
    public class WardansController : BaseApiController{
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public WardansController(DataContext context, ITokenService tokenService) {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("wardanRegistration")] // api/wardans/wardanRegistration
        public async Task<ActionResult<WardanJWTDto>> WardanRegister(WardansRegisterDto registerDto){

            if(await UserExists(registerDto.wardanId)) return BadRequest("you are already registered!!");
            using var hmac = new HMACSHA512();
            var wardan = new ForWardan{
                WardanId = registerDto.wardanId.ToLower(),
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key 
            };
            
            _context.forWardans.Add(wardan);
            await _context.SaveChangesAsync();

            return new WardanJWTDto{
                wardanId = wardan.WardanId,
                Username = wardan.UserName,
                WardanToken = _tokenService.WCreateToken(wardan)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<WardanJWTDto>> WardanLogin(WardanLogionDto wardanLogionDto){
            var wardan = await _context.forWardans.FindAsync(wardanLogionDto.wardanId);
            if(wardan == null) return Unauthorized("Invalid ID");
            using var hmac = new HMACSHA512(wardan.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(wardanLogionDto.Password));

            for(int i=0;i<computedHash.Length;i++){
                if(computedHash[i] != wardan.PasswordHash[i]) return Unauthorized("Invalid PASSWORD");
            }

            return new WardanJWTDto{
                wardanId = wardan.WardanId,
                Username = wardan.UserName,
                WardanToken = _tokenService.WCreateToken(wardan)
            };
        }


        private async Task<bool> UserExists(string id){
            return await _context.forWardans.AnyAsync(x => x.WardanId == id.ToLower());
        }
        
    }
}