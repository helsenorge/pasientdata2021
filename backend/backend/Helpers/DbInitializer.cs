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
            User user = new User
            {
                Name = "prdkg",
                Username = "pfdoke",
                Mail = "pekgdpg",
                GoogleId = "3405830k"
            };
            User user2 = new User
            {
                Name = "prdoijkg",
                Username = "pfuhudoke",
                Mail = "petetrkgdpg",
                GoogleId = "3425780k"
            };

            context.Users.Add(user);
            context.Users.Add(user2);
            context.SaveChanges();
            var friendrequest = new FriendRequest
            {
                UserSenderId = user.Id,
                UserReceiverId = user2.Id,
                SentAt = DateTime.Now
            };
            context.FriendRequests.Add(friendrequest);
            context.SaveChanges();
            var hei = 3;
        }
    }
}
