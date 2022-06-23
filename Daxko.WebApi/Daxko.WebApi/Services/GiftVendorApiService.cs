using System.Diagnostics;
using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public class GiftVendorApiService : IGiftVendorApiService
{
    public async Task ProcessDonation(Donation donation)
    {
        Debug.WriteLine($"GiftVendorApiService processed a donation for ${donation.Amount} from {donation.CreditCard.FirstName}");
    }
}