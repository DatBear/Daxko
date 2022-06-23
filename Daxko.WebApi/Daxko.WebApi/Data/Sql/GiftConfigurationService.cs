using Daxko.WebApi.Data.Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Daxko.WebApi.Data.Sql;

public class GiftConfigurationService : IGiftConfigurationService
{
    private DaxkoDbContext _dbContext;
    public GiftConfigurationService(DaxkoDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<GiftConfiguration>> GetAllAsync()
    {
        return await _dbContext.GiftConfigurations.ToListAsync();
    }
}