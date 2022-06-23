using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Daxko.WebApi.Data.Model;

namespace Daxko.WebApi.Data.Entity.Model;

public class Donation
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public decimal Amount { get; set; }
    public DateTime Created { get; set; }

    public virtual CreditCard CreditCard { get; set; }

    public Donation()
    {
        Created = DateTime.UtcNow;
    }

    public Donation(DonationRequest request) : this()
    {
        Amount = request.Amount;
        CreditCard = new CreditCard(request.CreditCard);
    }
}