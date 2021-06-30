using backend.Helpers;
using backend.InputModels;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class TripController: ControllerBase
    {
        private ITripService _service;
        public TripController(ITripService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpGet("test")]
        public IActionResult test([FromBody] AuthenticateModel model)
        {
            return Ok(model);
        }
    }
}
