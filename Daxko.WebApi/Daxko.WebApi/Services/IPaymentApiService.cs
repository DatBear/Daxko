using Daxko.WebApi.Data.Entity.Model;

namespace Daxko.WebApi.Services;

public interface IPaymentApiService
{
    Task ProcessDonation(Donation donation);
}