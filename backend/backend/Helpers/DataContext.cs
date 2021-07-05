using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using backend.Model;

namespace backend.Helpers
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<FriendRequest> FriendRequests { get; set; }
        public DbSet<UserHasFriendship> UserHasFriendships { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<UserHasTrip> UserHasTrips { get; set; }
        public DbSet<TripData> TripData { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<TripRequest> TripRequests { get; set; }
        public DbSet<Destination> Destionations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("public");
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Trip>()
                .HasOne(fs => fs.TripData)
                .WithOne(u => u.Trip)
                .HasForeignKey<TripData>(b => b.TripId);

            modelBuilder.Entity<FriendRequest>()
                .HasOne(fs => fs.UserSender)
                .WithMany(u => u.FriendRequestsSent)
                .HasForeignKey(fs => fs.UserSenderId)
                .HasPrincipalKey(t => t.Id);

            modelBuilder.Entity<FriendRequest>()
                .HasOne(fs => fs.UserReceiver)
                .WithMany(u => u.FriendRequestsReceived)
                .HasForeignKey(fs => fs.UserReceiverId)
                .HasPrincipalKey(t => t.Id);

        }

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
