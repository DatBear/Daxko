using System.Diagnostics;
using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public class PaymentApiService : IPaymentApiService
{
    public async Task ProcessDonation(Donation donation)
    {
        Debug.WriteLine($"PaymentApiService processed a donation for ${donation.Amount} from {donation.CreditCard.FirstName}");
    }
}