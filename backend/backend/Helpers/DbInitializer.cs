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

        }

       
    }
}
