using backend.Helpers;
using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IFriendService
    {
        void AddFriend(int idSender, int idAdded);
        List<User> GetAllFriends(int id);
        List<FriendRequest> GetAllFriendRequests(int id);
        void DeleteFriend(int id, int userToDeleteId);
        void AcceptFriendRequest(int id, int friendrequestId);
        void DeclineFriendRequest(int id, int friendrequestId);
        
    }
    public class FriendService: IFriendService
    {
        private DataContext _context;
        public FriendService(DataContext context)
        {
            _context = context;
        }

        public void AcceptFriendRequest(int id, int friendrequestId)
        {
            var user = _context.Users.Find(id);
            if(user == null)
                throw new AppException("User dosent exist");

            var request = _context.FriendRequests.Find(friendrequestId);
            if (request == null)
                throw new AppException("Friendrequest dosent exist");

            var userSender = _context.Users.Find(request.UserSenderId);
            if (userSender == null)
                throw new AppException("The user sending the request dosent exist anymore");


            var friendship = new Friendship
            {
                CreatedAt = DateTime.Now,
                Users = new List<UserHasFriendship>() {
                    new UserHasFriendship { UserId = user.Id},
                    new UserHasFriendship { UserId = userSender.Id}
                }
            };

            _context.Friendships.Add(friendship);
            _context.FriendRequests.Remove(request);
            _context.SaveChanges();
        }

        public void DeclineFriendRequest(int id, int friendrequestId)
        {
            var request = _context.FriendRequests.Find(friendrequestId);
            if (request == null)
                throw new AppException("Friendrequest dosent exist");

            _context.FriendRequests.Remove(request);
            _context.SaveChanges();
        }

        public void AddFriend(int idSender, int idAdded)
        {
            var userSender = _context.Users.Find(idSender);
            if (userSender == null)
                throw new AppException("Sending user dosent exist");

            var userAdded = _context.Users.Find(idAdded);
            if(userAdded == null)
                throw new AppException("Users added dosent exist");

            //sjekker om det finnes en forrespørsel mellom disse brukerene fra før
            var temprequest = _context.FriendRequests.ToList().Where(x => x.UserReceiver == userAdded).Where(x=> x.UserSender == userSender);
            if(temprequest != null)
            {
                throw new AppException("Friendrequest already exist");
            }

            //sjekker om det eksisterer et vennskap mellom disse to brukerene fra før
            var friendshipsids1 = _context.UserHasFriendships.ToList().Where(x => x.UserId == userSender.Id).Select(x=>x.FriendshipId);
            var friendshipsids2 = _context.UserHasFriendships.ToList().Where(x => x.UserId == userAdded.Id).Select(x => x.FriendshipId);
            bool hasequalItems = friendshipsids1.Intersect(friendshipsids2).Any();
            if (hasequalItems)
                throw new AppException("Friendship already exist");

            var request = new FriendRequest
            {
                UserSender = userSender,
                UserReceiver = userAdded,
                SentAt = DateTime.Now
            };
            _context.FriendRequests.Add(request);
            _context.SaveChanges();
        }

        public void DeleteFriend(int id, int userToDeleteId)
        {
            var userSender = _context.Users.Find(id);
            if (userSender == null)
                throw new AppException("User dosent exist");

            var userAdded = _context.Users.Find(userToDeleteId);
            if (userAdded == null)
                throw new AppException("Friend user dosent exist");

            var friendshipsids1 = _context.UserHasFriendships.ToList().Where(x => x.UserId == userSender.Id).Select(x => x.FriendshipId);
            var friendshipsids2 = _context.UserHasFriendships.ToList().Where(x => x.UserId == userAdded.Id).Select(x => x.FriendshipId);
            bool hasequalItems = friendshipsids1.Intersect(friendshipsids2).Any();
            if (!hasequalItems)
                throw new AppException("Friendship dosent exist");

            var friendshipid = friendshipsids1.Intersect(friendshipsids2).ToArray()[0];
            var friendship = _context.Friendships.Find(friendshipid);
            _context.Friendships.Remove(friendship);
            _context.SaveChanges();
        }

        public List<FriendRequest> GetAllFriendRequests(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                throw new AppException("User doesnt exist");
            return _context.FriendRequests.ToList().FindAll(x => x.UserReceiver == user);
        }

        public List<User> GetAllFriends(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                throw new AppException("User doesnt exist");
            var userhasfriendshipIds = _context.UserHasFriendships.ToList().FindAll(x => x.UserId == user.Id).Select(x=>x.FriendshipId);
            var Users = _context.Friendships.ToList().FindAll(x=> userhasfriendshipIds.Contains(x.Id)).ToList().Select(x=>x.Users).SelectMany(x => x).ToList();
            var friendsIds = Users.ToList().FindAll(x => x.UserId != id).Select(x=>x.UserId);
            return _context.Users.ToList().FindAll(x => friendsIds.Contains(x.Id));
        }
    }
}
