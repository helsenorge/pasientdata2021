using backend.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IFriendService
    {

    }
    public class FriendService: IFriendService
    {
        private DataContext _context;
        public FriendService(DataContext context)
        {
            _context = context;
        }
    }
}
