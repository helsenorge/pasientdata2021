using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.OutputModels
{
    public class TripWithRequest
    {
        public int TripId { get; set; }
        public int RequestId { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string NameCreator { get; set; }
    }
}
