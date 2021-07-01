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

        [HttpPost("GetAllFriends/{id}")]
        public IActionResult GetAllFriends([FromRoute] int id)
        {
            try
            {
                var friends = _service.GetAllFriends(id);
                return Ok(friends);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("GetAllFriendRequests/{id}")]
        public IActionResult GetAllFriendRequests([FromRoute] int id)
        {
            try
            {
                var requests = _service.GetAllFriendRequests(id);
                return Ok(requests);
            }
            catch (ApplicationException ex)
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
