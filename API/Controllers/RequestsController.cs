using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers{

    [ApiController]
    [Route("api/[controller]")]
    public class RequestsController : ControllerBase{
        private readonly DataContext _context;

        public RequestsController(DataContext context){
            _context = context;
        }

        [HttpPost("getPermission")]
        public async Task<ActionResult<RequestEntities>> OutingRequest(StudentRequestDto studentRequestDto){
            try{
                var requestData = new RequestEntities{
                    Id = studentRequestDto.id,
                    Date = studentRequestDto.date,
                    Day = studentRequestDto.day,
                    Name = studentRequestDto.name,
                    RoomNumber = studentRequestDto.roomNumber,
                    Destination = studentRequestDto.destination,
                    CurrentTime = studentRequestDto.currentTime,
                    InTime = studentRequestDto.inTime
                };

                _context.requestEntities.Add(requestData);
                await _context.SaveChangesAsync();
                return requestData;
            }
            catch (Exception ex){
                Console.WriteLine($"An error occurred: {ex.Message}");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }


        [HttpGet("seePermission/{id}")]
        public async Task<ActionResult<RequestEntities>> SeePermission(string id){
            var see = await _context.requestEntities.FindAsync(id);
            return see;
        }
        



       /*  [HttpPut("seeRequests")] */
    }
}
