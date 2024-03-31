using API.Entities;
using Microsoft.EntityFrameworkCore;
namespace API.Data{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<StudentProfiles> Students { get; set; }
        public DbSet<ForStudent> forStudents { get; set; }
        public DbSet<ForWardan> forWardans { get; set; }
    }
}