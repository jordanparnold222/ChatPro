using System.Collections.Generic;
using System.Linq;
using ChatPro;
using ChatPro.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private IMSocialDBContext _dbContext;

        public UserController(IMSocialDBContext context)
        {

            _dbContext = context;
        }

        [HttpGet]
        public IList<User> Get()
        {
            return (this._dbContext.User.ToList());
        }
    }
}
