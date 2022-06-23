using System.Diagnostics;
using Daxko.WebApi.Data.Entity.Model;
using Daxko.WebApi.Data.Model;
using Daxko.WebApi.Services;

namespace Daxko.WebApi.Data.Sql;

public class DonationService : IDonationService
{
    private readonly DaxkoDbContext _dbContext;
    private readonly IGiftVendorApiService _giftVendorApi;
    private readonly IPaymentApiService _paymentApi;
    private readonly ILetterApiService _letterApi;

    public DonationService(DaxkoDbContext dbContext, IGiftVendorApiService giftVendorApi, IPaymentApiService paymentApi, ILetterApiService letterApi)
    {
        _dbContext = dbContext;
        _giftVendorApi = giftVendorApi;
        _paymentApi = paymentApi;
        _letterApi = letterApi;
    }

    public async Task<bool> AddDonationAsync(DonationRequest request)
    {
        var donation = new Donation(request);
        try
        {
            _dbContext.Donations.Add(donation);
            await _dbContext.SaveChangesAsync();

            await _giftVendorApi.ProcessDonation(donation);
            await _paymentApi.ProcessDonation(donation);
            await _letterApi.ProcessDonation(donation);

            return true;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex);
            //log this
            return false;
        }
    }


}