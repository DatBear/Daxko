using Daxko.WebApi.Data.Model;

namespace Daxko.WebApi.Data.Sql;

public interface IDonationService
{
    Task<bool> AddDonationAsync(DonationRequest request);
}