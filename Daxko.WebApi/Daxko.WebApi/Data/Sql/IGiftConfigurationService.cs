using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Data.Sql;

public interface IGiftConfigurationService
{
    Task<List<GiftConfiguration>> GetAllAsync();
}