using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers{
    public class StudentsController :  BaseApiController {
        private readonly DataContext _context;
        public StudentsController(DataContext context) {
            _context = context;
        }

        [HttpPost("studentRegistration")] //api/students/studentsregistration
        public async Task<ActionResult<ForStudent>> StudentRegister(StudentRegisterDto registerDto){

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
            return student;
        }

        [HttpPost("login")] 
        public async Task<ActionResult<ForStudent>> Login(StudentLoginDto studentLoginDto){

            var student = await _context.forStudents.FindAsync(studentLoginDto.studentId);
            if (student == null) return Unauthorized("Invalid ID");
            using var hmac = new HMACSHA512(student.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(studentLoginDto.Password));

            for(int i=0;i<computedHash.Length;i++){
                if(computedHash[i] != student.PasswordHash[i]) return Unauthorized("Invalid PASSWORD");
            }

            return student;
        }

        private async Task<bool> UserExists(string id){
            return await _context.forStudents.AnyAsync(x => x.StudentId == id);
        }
        
    }
}