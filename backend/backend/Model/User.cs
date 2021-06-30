using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string GoogleId { get; set; }
        public string Mail { get; set; }
        public List<FriendRequest> FriendRequestsSent { get; set; }
        public List<FriendRequest> FriendRequestsReceived { get; set; }
        public List<UserHasFriendship> UserHasFriendShips { get; set; }
        public List<UserHasTrip> UserHasTrips { get; set; }
        public List<TripRequest> TripRequests { get; set; }
      
    }
}
