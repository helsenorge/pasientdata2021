using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Model;

namespace backend.Helpers
{
    public class DbInitializer
    {
        public static void Initialize(DataContext context)
        {
            context.Database.Migrate();

            
            User user1 = new User
            {
                Name = "Jonas pof",
                Mail = "depofr",
                GoogleId = "0003403409",
                Username = "peoffr"
            };

            User user2 = new User
            {
                Name = "Jonas Lier",
                Mail = "depofkor",
                GoogleId = "1343403409",
                Username = "peokoffr"
            };
            context.Users.Add(user1);
            context.Users.Add(user2);

            context.SaveChanges();
            var friendship = new Friendship
            {
                CreatedAt = DateTime.Now,
                Users = new List<UserHasFriendship>() { new UserHasFriendship { UserId = 2 }, new UserHasFriendship { UserId = 1 } }
            };
            context.Friendships.Add(friendship);
            context.SaveChanges();

            var userHasTrip1 = new UserHasTrip
            {
                UserId = user1.Id,
                IsCreator = true,
                AcceptedAt = DateTime.Now
            };
            var userHasTrip2 = new UserHasTrip
            {
                UserId = user2.Id,
                IsCreator = false,
                AcceptedAt = DateTime.Now
            };

            var destinationsToStore = new List<Destination>();
            destinationsToStore.Add(new Destination
            {
                StopDestionation = "forste stopp",
                StopNumber = 1,
                Longitude = 59.907663036,
                Latitude = 10.73833038
            });
          
            var tripdata = new TripData
            {
                Description = "",
                Destionations = destinationsToStore
            };

            var trip = new Trip
            {
                TripData = tripdata,
                Name = "testtur",
                CreatedAt = DateTime.Now,
                Users = new List<UserHasTrip>() { userHasTrip1, userHasTrip2 },
                Requests = null
            };
            context.Trips.Add(trip);
            context.SaveChanges();

        }

       
    }
}
