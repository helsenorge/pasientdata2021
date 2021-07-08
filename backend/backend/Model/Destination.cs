using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Destination
    {
        public int Id { get; set; }
        public int TripDataId { get; set; }
        public string StopDestionation { get; set; }
        public int StopNumber { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
    }
}
