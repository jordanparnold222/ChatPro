using ChatPro.Models;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

namespace ChatPro;
    public class IMSocialDBContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public IMSocialDBContext(DbContextOptions<IMSocialDBContext> options) : base(options) { }
    }
