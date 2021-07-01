using backend.Helpers;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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

        [HttpPost("AddFriend/{idAdded}")]
        public IActionResult AddFriend([FromRouter] int idAdded)
        {
            try
            {
                var idSender = GetUserId();
                _service.AddFriend(idSender, idAdded);
                return Ok();
            }
            catch(ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("GetAllFriends")]
        public IActionResult GetAllFriends()
        {
            try
            {
                var id = GetUserId();
                var friends = _service.GetAllFriends(id);
                return Ok(friends);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("GetAllFriendRequests")]
        public IActionResult GetAllFriendRequests()
        {
            try
            {
                var id = GetUserId();
                var requests = _service.GetAllFriendRequests(id);
                return Ok(requests);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("RemoveFriend/{useridToRemove}")]
        public IActionResult RemoveFriend([FromRoute] int useridToRemove)
        {
            try
            {
                var id = GetUserId();
                _service.DeleteFriend(id, useridToRemove);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("AcceptFriendRequest/{friendrequestid}")]
        public IActionResult AcceptFriendReqest([FromRoute] int friendrequestid)
        {
            try
            {
                var id = GetUserId();
                _service.AcceptFriendRequest(id, friendrequestid);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("DeclineFriendRequest/{friendrequestid}")]
        public IActionResult DeclineFriendReq([FromRoute] int friendrequestid)
        {
            try
            {
                var id = GetUserId();
                _service.DeclineFriendRequest(id, friendrequestid);
                return Ok();
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

        private int GetUserId()
        {
            var key = Request.Headers["Authorization"].ToString().Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: key);
            return int.Parse(token.Claims.First(c => c.Type == "unique_name").Value);
        }

    }
}
