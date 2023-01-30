using ChatPro.Models;

namespace ChatPro.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
