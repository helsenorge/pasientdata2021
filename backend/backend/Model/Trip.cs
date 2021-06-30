using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime TripDate { get; set; }
        public int TripDataId { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<UserHasTrip> Users { get; set; }
        public List<TripRequest> Requests { get; set; }
    }
}
