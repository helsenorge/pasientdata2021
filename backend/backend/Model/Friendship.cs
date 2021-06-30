using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Friendship
    {
        public int Id { get; set; }
        public List<UserHasFriendship> Users { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
