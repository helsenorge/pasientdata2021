using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class DailyWork 
    {
        public int Id { get; set;}
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public List<HourWork> HourWork { get; set; }
    }
}
