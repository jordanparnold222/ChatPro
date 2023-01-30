using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class SignInModel
{
    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}