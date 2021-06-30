using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class UserHasFriendship
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int FriendshipId { get; set; }

    }
}
