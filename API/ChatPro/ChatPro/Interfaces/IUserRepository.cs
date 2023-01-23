using ChatPro.Models;

namespace ChatPro.Interfaces
{
    public interface IUserRepository
    {
        void Update(User user);

        Task<bool> SaveAllAsync();

        Task<IEnumerable<User>> GetAllUsersAsync();

        Task<User> GetUserByIdAsync(int id);

        Task<User> GetUserByUsernameAsync(string name);

        Task<User> GetUserByEmailAsync(string email);

    }
}
