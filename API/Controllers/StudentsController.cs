using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers{
    public class StudentsController :  BaseApiController {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public StudentsController(DataContext context, ITokenService tokenService) {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("studentRegistration")] //api/students/studentsregistration
        public async Task<ActionResult<StudentJWTDto>> StudentRegister(StudentRegisterDto registerDto){

            if(await UserExists(registerDto.studentId)) return BadRequest("you are already registered!!");
            using var hmac = new HMACSHA512();
            var student = new ForStudent{
                StudentId = registerDto.studentId.ToLower(),
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key 
            };
            
            _context.forStudents.Add(student);
            await _context.SaveChangesAsync();
            return new StudentJWTDto{
                studentId = student.StudentId,
                Username = student.UserName,
                StudentToken = _tokenService.SCreateToken(student)
            };
        }

        [HttpPost("login")] 
        public async Task<ActionResult<StudentJWTDto>> StudentLogin(StudentLoginDto studentLoginDto){

            var student = await _context.forStudents.FindAsync(studentLoginDto.studentId);
            if (student == null) return Unauthorized("Invalid ID");
            using var hmac = new HMACSHA512(student.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(studentLoginDto.Password));

            for(int i=0;i<computedHash.Length;i++){
                if(computedHash[i] != student.PasswordHash[i]) return Unauthorized("Invalid PASSWORD");
            }

            return new StudentJWTDto{
                studentId = student.StudentId,
                Username = student.UserName,
                StudentToken = _tokenService.SCreateToken(student)
            };
        }

        private async Task<bool> UserExists(string id){
            return await _context.forStudents.AnyAsync(x => x.StudentId == id);
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

    }
}