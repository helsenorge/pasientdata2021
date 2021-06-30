using backend.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface ITripService
    {
        void Create(string name, DateTime date, List<int> InvitedUserIds);
    }
    public class TripService: ITripService
    {
        private DataContext _context;
        public TripService(DataContext context)
        {
            _context = context;
        }

        public void Create(string name, DateTime date, List<int> InvitedUserIds)
        {
            throw new NotImplementedException();
        }
    }
}
