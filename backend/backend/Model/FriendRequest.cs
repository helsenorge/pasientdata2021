using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class FriendRequest
    {
        public int Id { get; set; }
        public int UserSenderId { get; set; }
        public int UserReceiverId { get; set; }
        public User UserSender { get; set; }
        public User UserReceiver { get; set; }
        public DateTime SentAt { get; set; }
    }
}
