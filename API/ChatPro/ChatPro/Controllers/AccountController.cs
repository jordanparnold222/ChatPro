using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatPro;
using ChatPro.Models;
using ChatPro.Interfaces;
using ChatPro.DTOs;
using System.Security.Cryptography;
using System.Text;

namespace ChatPro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : BaseAPIController
    {
        private readonly IMSocialDBContext _context;

        private readonly ITokenService _tokenService;

        public AccountController(IMSocialDBContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }


        //REGISTER METHOD
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
            {

            if (await UsernameExists(registerDto.Username)) return BadRequest("Username is taken");
            if (await EmailExists(registerDto.Email)) return BadRequest("Email is taken");

            using var hmac = new HMACSHA512();

            var user = new User
            {
                Email = registerDto.Email,
                FirstName = registerDto.FirstName.ToLower(),
                LastName = registerDto.LastName.ToLower(),
                Username = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };
            }
        //LOGIN METHOD
        [HttpPost("login")]

        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.User
            .SingleOrDefaultAsync(x => x.Email == loginDto.Email);

            if (user == null) return Unauthorized("Invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };

        }


        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.ID)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.ID }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.ID == id);
        }

        //Makes sure username is not taken
        private async Task<bool> UsernameExists(string username)
        {
            return await _context.User.AnyAsync(x => x.Username == username.ToLower());
        }


        //Makes sure email is not taken
        private async Task<bool> EmailExists(string username)
        {
            return await _context.User.AnyAsync(x => x.Email == username.ToLower());
        }
    }
}
