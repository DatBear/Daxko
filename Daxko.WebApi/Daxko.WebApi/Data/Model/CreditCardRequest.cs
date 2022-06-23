using System.ComponentModel.DataAnnotations;

namespace Daxko.WebApi.Data.Model;

public class CreditCardRequest
{
    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string CardNumber { get; set; }

    [Required]
    public string CVV { get; set; }

    [Required]
    public int ExpirationMonth { get; set; }

    [Required]
    public int ExpirationYear { get; set; }

    [Required]
    public string Address { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public string State { get; set; }

    [Required]
    public string ZipCode { get; set; }
}