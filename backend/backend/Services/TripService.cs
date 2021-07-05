using backend.Helpers;
using backend.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface ITripService
    {
        Trip Create(int userid, List<int> friendsIds, string name, DateTime date, string routeDescription, List<(int, string)> destinations);
        void InviteFriend(int userid, int tripid, int friendId);
        void AcceptTripRequest(int userid, int tripreqid);
        void DeclineTripRequest(int userid, int tripreqid);
        void DeleteTrip(int userid, int tripid);
        Trip GetTrip(int tripid);
        List<Trip> GetUsersTrips(int userid);
        List<Trip> GetFriendsTrips(int userid);
    }

    public class TripService: ITripService
    {
        private DataContext _context;
        public TripService(DataContext context)
        {
            _context = context;
        }

        public void AcceptTripRequest(int userid, int tripreqid)
        {
            var user = _context.Users.Find(userid);
            if (user == null)
                throw new AppException("User dosent exist");

            var request = _context.TripRequests.Find(tripreqid);
            if (request == null)
                throw new AppException("Trip-request dosent exist");

            if (request.UserId != userid)
                throw new AppException("Trip-request dosent belong to this user");

            var trip = _context.Trips.Find(request.TripId);
            trip.Users.Add(new UserHasTrip
            {
                IsCreator = false,
                UserId = userid,
                AcceptedAt = DateTime.Now
            });
            _context.TripRequests.Remove(request);
            _context.Trips.Update(trip);
            _context.SaveChanges();
        }

        public Trip Create(int userid, List<int> friendsIds, string name, DateTime date, string routeDescription, List<(int, string)> destinations)
        {
            friendsIds.Add(1);
            friendsIds.Add(2);
            var user = _context.Users.Find(userid);
            if(user == null)
            {
                throw new AppException("User dosent exist");
            }
            var userHasTrip = new UserHasTrip
            {
                UserId = userid,
                IsCreator = true,
                AcceptedAt = DateTime.Now
            };

            //definerer triprequest for alle vennene som er invitert
            List<TripRequest> friendsTripRequests = new List<TripRequest>();
            friendsIds.ForEach(friendid =>
            {
                var friend = _context.Users.Find(friendid);
                if (friend == null)
                    throw new AppException("Friend dosent exist");
                friendsTripRequests.Add(new TripRequest
                {
                    UserId = friendid,
                    SentAt = DateTime.Now
                });
            });

            //lagre stoppe-stedene for turen
            var destinationsToStore = new List<Destination>();
            destinations.ForEach(destination =>
            {
                destinationsToStore.Add(new Destination
                {
                    StopDestionation = destination.Item2,
                    StopNumber = destination.Item1
                });
            });

            //lagre data om selve turen, er den dataen vi får fra MapBox
            var tripdata = new TripData
            {
                Description = routeDescription,
                Destionations = destinationsToStore
            };

            //Setter sammen all dataen i et trip-objekt, slik at når dette objektet lagres i context, så lagres alle de tilknyttede objektene også
            var trip = new Trip
            {
                TripData = tripdata,
                Name = name,
                CreatedAt = DateTime.Now,
                Users = new List<UserHasTrip>() { userHasTrip },
                Requests = friendsTripRequests
            };
            _context.Trips.Add(trip);
            _context.SaveChanges();

            //testing
            
            var friendship = new Friendship
            {
                CreatedAt = DateTime.Now,
                Users = new List<UserHasFriendship>() { new UserHasFriendship { UserId = 3 }, new UserHasFriendship { UserId = 1 } }
            };
            _context.Friendships.Add(friendship);
            _context.SaveChanges();
            GetFriendsTrips(1);
            return trip;
        }

        public void DeclineTripRequest(int userid, int tripreqid)
        {
            var user = _context.Users.Find(userid);
            if (user == null)
                throw new AppException("User dosent exist");

            var request = _context.TripRequests.Find(tripreqid);
            if (request == null)
                throw new AppException("Trip-request dosent exist");

            if(request.UserId != userid)
                throw new AppException("Trip-request dosent belong to this user");

            _context.TripRequests.Remove(request);
            _context.SaveChanges();
        }

        public void DeleteTrip(int userid, int tripid)
        {
            var user = _context.Users.Find(userid);
            if(user == null)
                throw new AppException("User dosent exist");

            var trip = _context.Trips.Find(tripid);
            if(trip == null)
                throw new AppException("Trip dosent exist");

            var userHasTrip = _context.UserHasTrips.ToList().FindAll(x => x.TripId == tripid)
                .Where(x => x.UserId == userid).ToArray()[0];
            if(userHasTrip == null)
                throw new AppException("User is not part of this trip");

            if (!userHasTrip.IsCreator)
                throw new AppException("User dont have permission to delete this trip");

            _context.Trips.Remove(trip);
            _context.SaveChanges();
        }

        public List<Trip> GetFriendsTrips(int userid)
        {
            var user = _context.Users.Include(x => x.UserHasFriendShips).ToList().Find(x=>x.Id == userid);
            if(user == null)
                throw new AppException("User dosent exist");

            var friendsshipIds = user.UserHasFriendShips.ToList().Select(x => x.FriendshipId);

            var userHasFriendships = _context.Friendships.ToList().FindAll(x => friendsshipIds.Contains(x.Id)).ToList()
                .Select(x => x.Users).SelectMany(x => x).ToList();

            var friendsIds = userHasFriendships.ToList().FindAll(x => x.UserId != userid).Select(x => x.UserId);

            var Users = _context.Users.Include(x=>x.UserHasTrips).ToList().FindAll(x => friendsIds.Contains(x.Id));

            var userHasTripIds = Users.ToList().Select(x => x.UserHasTrips).SelectMany(x => x).ToList();

            var tripIds = userHasTripIds.ToList().Where(x=>x.IsCreator).Select(x => x.TripId).ToList();

            return _context.Trips.ToList().FindAll(x => tripIds.Contains(x.Id));
        }

        public Trip GetTrip(int tripid)
        {
            throw new NotImplementedException();
        }

        public List<Trip> GetUsersTrips(int userid)
        {
            throw new NotImplementedException();
        }

        public void InviteFriend(int userid, int tripid, int friendId)
        {
            throw new NotImplementedException();
        }
    }
}


