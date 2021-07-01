﻿using backend.Helpers;
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
            throw new NotImplementedException();
        }

        public void AddFriend(int idSender, int idAdded)
        {
            var userSender = _context.Users.Find(idSender);
            var userAdded = _context.Users.Find(idAdded);
            if(userSender == null || userAdded == null)
                throw new AppException("Users does not exist");
            var oij = _context.FriendRequests.ToList().Where(x => x.UserReceiver == userAdded).Where(x=> x.UserSender == userSender);
            if( oij != null)
            {
                throw new AppException("Friendrequest already exist");
            }
            var request = new FriendRequest
            {
                UserSender = userSender,
                UserReceiver = userAdded,
                SentAt = DateTime.Now
            };
            _context.FriendRequests.Add(request);
            _context.SaveChanges();
        }

        public void DeclineFriendRequest(int id, int friendrequestId)
        {
            throw new NotImplementedException();
        }

        public void DeleteFriend(int id, int userToDeleteId)
        {
            throw new NotImplementedException();
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
