using System.ComponentModel.DataAnnotations;

namespace API.DTOs{
    public class StudentRequestDto{

        [Required]
        public string id { get; set; }
        [Required]
        public string date { get; set; }
        [Required]
        public string day { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string roomNumber { get; set; }
        [Required]
        public string destination { get; set; }
        [Required]
        public string currentTime { get; set; }
        [Required]
        public string inTime { get; set; }
        public bool status { get; set; }
    }
}