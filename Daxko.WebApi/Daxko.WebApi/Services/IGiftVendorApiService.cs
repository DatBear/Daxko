using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public interface IGiftVendorApiService
{
    Task ProcessDonation(Donation donation);
}