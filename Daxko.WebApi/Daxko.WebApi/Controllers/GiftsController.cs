using Daxko.WebApi.Data.Sql;
using Microsoft.AspNetCore.Mvc;

namespace Daxko.WebApi.Controllers;

[ApiController]
[Route("/api/v1/[controller]")]
public class GiftsController : ControllerBase
{
    private IGiftConfigurationService _giftConfigurationService;

    public GiftsController(IGiftConfigurationService giftConfigurationService)
    {
        _giftConfigurationService = giftConfigurationService;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        var gifts = await _giftConfigurationService.GetAllAsync();
        return Ok(gifts);
    }
}