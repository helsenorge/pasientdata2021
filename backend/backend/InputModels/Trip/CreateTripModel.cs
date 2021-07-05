using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.InputModels.Trip
{
    public class CreateTripModel
    {
        public List<int> friendsIds { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
        public string routeDescription { get; set; }
        public List<DestionationModel> destinations { get; set; }
    }
}
