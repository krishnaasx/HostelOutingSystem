using System.ComponentModel.DataAnnotations;

namespace API.Entities{
    public class ForWardan{
        [Key]
        public string WardanId { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}