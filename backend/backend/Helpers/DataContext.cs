using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using backend.Model;

namespace backend.Helpers
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Challenge> Challenges { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<PartChallenge> PartChallenges { get; set; }
        public DbSet<DailyWork> DailyWorks { get; set; }
        public DbSet<HourWork> HourWorks { get; set; }
        public DbSet<UserHasGroup> UserHasGroup { get; set; }


        protected readonly IConfiguration Configuration;
        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlite(Configuration.GetConnectionString("Connectionstring"));
        }
    }
}
