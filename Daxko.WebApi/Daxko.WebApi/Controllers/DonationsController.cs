using Daxko.WebApi.Data.Model;
using Daxko.WebApi.Data.Sql;
using Microsoft.AspNetCore.Mvc;

namespace Daxko.WebApi.Controllers;

[ApiController]
[Route("/api/v1/[controller]")]
public class DonationsController : ControllerBase
{
    private readonly IDonationService _donationService;

    public DonationsController(IDonationService donationService)
    {
        _donationService = donationService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateDonation(DonationRequest request)
    {
        var success = await _donationService.AddDonationAsync(request);
        if (!success)
        {
            return BadRequest();
        }
        return Ok(success);
    }
}