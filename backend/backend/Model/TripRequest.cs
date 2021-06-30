using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class TripRequest
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int TripId { get; set; }
        public DateTime SentAt { get; set; }
    }
}
