

using System.ComponentModel.DataAnnotations;

namespace Daxko.WebApi.Data.Model;

public class DonationRequest
{
    [Required]
    public decimal Amount { get; set; }
    public CreditCardRequest CreditCard { get; set; }
}