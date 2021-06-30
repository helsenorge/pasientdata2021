using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Group
    {
        public int Id { get; set; }
        public string Navn { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<UserHasGroup> UserHasGroup { get; set; }
    }
}
