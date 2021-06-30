using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class UserHasTrip
    {
        public int Id { get; set; }
        public int TripId { get; set; }
        public int UserId { get; set; }
        public bool IsCreator { get; set; }
        public DateTime AcceptedAt { get; set; }
    }
}
