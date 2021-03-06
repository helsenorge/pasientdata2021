using Microsoft.Extensions.Configuration;
using backend.Helpers;
using backend.Model;
using Google.Apis.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public interface IUserService
    {
        User GetById(int id);
        User Create(string mail, string name, string username, string googleid);
        User Authenticate(string idtoken);
        List<User> search(int id,string key);
        void Delete(int id);
        void SetUsername(int id, string username);

        //Definere funksjonene som UserController trenger, og som implementeres i UserService
    }

    public class UserService : IUserService
    {
        private DataContext _context;
        private readonly IConfiguration _configuration;
        public UserService(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public User Authenticate(string idtoken)
        {
            try
            {
                var payload = GoogleJsonWebSignature.ValidateAsync(idtoken, new GoogleJsonWebSignature.ValidationSettings()
                {
                    Audience = new[] { _configuration.GetSection("GoogleAuthSettings").GetSection("clientId").Value },

                }).Result;

                return SaveUser(payload);
            }
            catch (Exception ex)
            {
                throw new AppException("Authentication failed");
            }
        }

        private User SaveUser(GoogleJsonWebSignature.Payload payload)
        {
            var user = _context.Users.ToList().Find(x => x.GoogleId == payload.Subject + "k");
            if (user == null)
            {
                return Create(mail: payload.Email, name: payload.GivenName + " " + payload.FamilyName,
                    username: "", googleid: payload.Subject);
            }
            else
            {
                return user;
            }
        }

        public User Create(string mail, string name, string username, string googleid)
        {
            if(_context.Users.ToList().Exists(x=>x.GoogleId == googleid))
            {
                return null;
            }


            var user = new User
            {
                Mail = mail,
                Name = name,
                Username = username,
                GoogleId = googleid+"k"
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public List<User> search(int id, string key)
        {
            var users = _context.Users.ToList().Where(x=> x.Id != id).ToList().FindAll(x => x.Username.ToLower().StartsWith(key.ToLower()));            
            return users;
        }

        public void Delete(int id)
        {   
            var user = _context.Users.Find(id);
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

        public void SetUsername(int id, string username)
        {
            var user = _context.Users.Find(id);
            if(user == null)
                throw new AppException("User doesnt exist");
            
            if(_context.Users.ToList().Exists(x=>x.Username == username))
                throw new AppException("Username already exist");

            user.Username = username;
            _context.Users.Update(user);
            _context.SaveChanges();
        }
    }
}
