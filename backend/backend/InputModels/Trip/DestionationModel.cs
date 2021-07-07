using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.InputModels.Trip
{
    public class DestionationModel
    {
        public string Destination { get; set; }
        public int Number { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
    }
}
