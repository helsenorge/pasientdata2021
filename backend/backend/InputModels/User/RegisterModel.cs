using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.InputModels
{
    public class RegisterModel
    {
        [Required]
        public string Mail { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int Weight { get; set; }
        [Required]
        public int Height { get; set; }
    }
}
