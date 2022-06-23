using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public interface ILetterApiService
{
    Task ProcessDonation(Donation donation);
}