using System.Diagnostics;
using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public class LetterApiService : ILetterApiService
{
    public async Task ProcessDonation(Donation donation)
    {
        Debug.WriteLine($"LetterApiService processed a donation for ${donation.Amount} from {donation.CreditCard.FirstName}");
    }
}