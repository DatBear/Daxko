using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Daxko.WebApi.Data.Entity.Model;

public class GiftConfiguration
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal MinDonation { get; set; }
    public decimal? MaxDonation { get; set; }

    public GiftConfiguration()
    {
    }

    public GiftConfiguration(int id, string name, decimal minDonation, decimal? maxDonation)
    {
        Id = id;
        Name = name;
        MinDonation = minDonation;
        MaxDonation = maxDonation;
    }
}