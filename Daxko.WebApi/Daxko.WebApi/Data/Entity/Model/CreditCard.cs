using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Daxko.WebApi.Data.Model;

namespace Daxko.WebApi.Data.Entity.Model;

public class CreditCard
{
    [Key]
    [ForeignKey(nameof(Donation))]
    public int DonationId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string CardNumber { get; set; }
    public string CVV { get; set; }
    public int ExpirationMonth { get; set; }
    public int ExpirationYear { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }

    public virtual Donation Donation { get; set; }

    public CreditCard()
    {
    }

    public CreditCard(CreditCardRequest request)
    {
        FirstName = request.FirstName;
        LastName = request.LastName;
        Email = request.Email;
        CardNumber = request.CardNumber;
        CVV = request.CVV;
        ExpirationMonth = request.ExpirationMonth;
        ExpirationYear = request.ExpirationYear;
        Address = request.Address;
        City = request.City;
        State = request.State;
        ZipCode = request.ZipCode;
    }
}