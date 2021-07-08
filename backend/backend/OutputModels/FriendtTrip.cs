using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.OutputModels
{
    public class FriendtTrip
    {
        public int Tripid { get; set; }
        public User User { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
    }
}
