using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.InputModels
{
    public class AuthenticateModel
    {
        [Required]
        public string Provider { get; set; }
        [Required]
        public string IdToken { get; set; }
    }
}
