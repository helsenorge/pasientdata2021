using backend.Helpers;
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
    public class FriendController : ControllerBase
    {
        private IFriendService _service;
        public FriendController(IFriendService service)
        {
            _service = service;
        }

        [HttpPost("AddFriend/{idSender}/{idAdded}")]
        public IActionResult AddFriend([FromRouter] int idSender, int idAdded)
        {
            try
            {
                _service.AddFriend(idSender, idAdded);
                return Ok();
            }
            catch(ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpGet("test")]
        public IActionResult test()
        {
            return Ok("Hei fra meg");
        }

    }
}
