using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers{

    [Authorize]
    public class ProfilesController : BaseApiController{
        private readonly DataContext _context;
        public ProfilesController(DataContext context){
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentProfiles>>> GetProfiles(){
            var profiles = await _context.Students.OrderBy(s => s.RoomNumber).ToListAsync();
            return profiles;
        }

        [HttpGet("{id}")] // api/profile/id
        public async Task<ActionResult<StudentProfiles>> GetStudent(string id){
            return await _context.Students.FindAsync(id);
        }
    }
}