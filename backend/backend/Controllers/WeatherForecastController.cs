using backend.Helpers;
using backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly DataContext context;

        public WeatherForecastController(DataContext _context)
        {
            context = _context;
        }

        [HttpPost]
        public IActionResult Add()
        {
            User user = new User { Name = "Jonas" };
            context.Users.Add(user);
            context.SaveChanges();
            return Ok("dette er en test");
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            if(context.Users.ToList().Exists(x=> x.Name == "Jonas"))
            {
                return Ok(context.Users.ToList());
            }
            return Ok("Did not fint any users");
        }


    }
}
