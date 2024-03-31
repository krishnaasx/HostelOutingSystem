using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers{

    public class WardansController : BaseApiController{
        private readonly DataContext _context;
        public WardansController(DataContext context) {
            _context = context;
        }

        [HttpPost("wardanRegistration")] // api/wardans/wardanRegistration
        public async Task<ActionResult<ForWardan>> WardanRegister(WardansRegisterDto registerDto){

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

            return wardan;
        }

        private async Task<bool> UserExists(string id){
            return await _context.forWardans.AnyAsync(x => x.WardanId == id.ToLower());
        }
        
    }
}