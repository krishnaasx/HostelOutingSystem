using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers{

    [ApiController]
    [Route("api/[controller]")] // api/profile
    public class ProfileController : ControllerBase{
        private readonly DataContext _context;
        public ProfileController(DataContext context){
            _context = context;
        }

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