using Daxko.WebApi.Data.Entity.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Daxko.WebApi.Data.Sql;

public class DaxkoDbContext : DbContext
{
    public DaxkoDbContext(DbContextOptions<DaxkoDbContext> options) : base(options)
    {
    }
    
    public DbSet<Donation> Donations { get; set; }
    public DbSet<GiftConfiguration> GiftConfigurations { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<GiftConfiguration>().HasData(new List<GiftConfiguration>
        {
            new(1, "Sticker", 25.00m, 49.99m),
            new(2, "T-Shirt", 50m, 99.99m),
            new(3, "Coffee mug", 100.00m, 100_000_000.00m),
            new(4, "Sign", 100_000_000.00m, null),
        });
    }

}