using System.ComponentModel.DataAnnotations;
namespace API.Entities{
    public class ForStudent{
        
        [Key]
        public string StudentId { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}