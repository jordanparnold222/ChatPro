using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatPro;
using ChatPro.Models;
using Microsoft.Data.SqlClient;
using System.Drawing;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace ChatPro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMSocialDBContext _context;
        private readonly IConfiguration _config;

        public UsersController(IMSocialDBContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration(User User)
        {
            // Validate input
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Insert User
            _context.User.Add(User);
            await _context.SaveChangesAsync();

            return Ok("Registration Successful");
        }

        [HttpPost]
        [Route("signin")]
        public async Task<IActionResult> SignIn(SignInModel model)
        {
            // Validate input
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Authenticate user
            var user = await _context.User.SingleOrDefaultAsync(u => u.Username == model.Email && u.Password == model.Password);
            if (user == null)
            {
                return Unauthorized();
            }

            // Generate JWT
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, model.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
        }
    }
}

