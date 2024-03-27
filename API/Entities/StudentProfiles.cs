using System.ComponentModel.DataAnnotations;
namespace API.Entities{
    public class StudentProfiles{
        
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public int RoomNumber{ get; set; }
        public string PhoneNumber { get; set; }
        public string ParentPhoneNumber { get; set; }
        public string Address { get; set; }
        public string DepartmentAndCourse { get; set; }
    }
}