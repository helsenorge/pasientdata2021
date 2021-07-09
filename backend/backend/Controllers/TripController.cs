using backend.Helpers;
using backend.InputModels;
using backend.InputModels.Trip;
using backend.OutputModels;
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
    public class TripController : ControllerBase
    {
        private ITripService _service;
        public TripController(ITripService service)
        {
            _service = service;
        }

        [HttpPost()]
        public IActionResult CreateTrip([FromBody] CreateTripModel model)
        {
            try
            {
                var userid = GetUserId();
                var trip = _service.Create(userid, model.friendsIds, model.name, model.date, model.routeDescription, model.destinations);
                return Ok(trip.Id);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("Invite/{tripid}/{friendid}")]
        public IActionResult InviteToTrip([FromRoute] int tripid, int friendid)
        {
            try
            {
                var userid = GetUserId();
                _service.InviteFriend(userid, tripid, friendid);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("AcceptTripRequest/{tripreqid}")]
        public IActionResult AcceptTripReq([FromRoute] int tripreqid)
        {
            try
            {
                var userid = GetUserId();
                _service.AcceptTripRequest(userid, tripreqid);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("DeclineTripRequest/{tripreqid}")]
        public IActionResult DeclineTripReq([FromRoute] int tripreqid)
        {
            try
            {
                var userid = GetUserId();
                _service.DeclineTripRequest(userid, tripreqid);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("AllInvitedUsers/{tripid}")]
        public IActionResult AllInvitedUsers([FromRoute] int tripid)
        {
            try
            {
                var invited = _service.GetAllInvitedUsers(tripid);
                return Ok(invited);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("AllAcceptedUsers/{tripid}")]
        public IActionResult AllAcceptedUsers([FromRoute] int tripid)
        {
            try
            {
                var accepted = _service.GetAllAcceptedUsers(tripid);
                return Ok(accepted);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("AllTripRequests")]
        public IActionResult AllTripRequests()
        {
            try
            {
                //TESTE DENNE ETTER PAUSEN
                var userid = GetUserId();
                var trips = _service.GetAllTripRequests(userid);
                return Ok(trips);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{tripid}")]
        public IActionResult DeleteTrip([FromRoute] int tripid)
        {
            try
            {
                var userid = GetUserId();
                _service.DeleteTrip(userid, tripid);
                return Ok();
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("{tripid}")]
        public IActionResult GetTrip([FromRoute] int tripid)
        {
            try
            {
                var userid = GetUserId();
                var trip =_service.GetTrip(tripid);
                return Ok(trip);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("UserTrips")]
        public IActionResult GetUsersTrips()
        {
            try
            {
                var userid = GetUserId();
                var trips = _service.GetUsersTrips(userid);
                return Ok(trips);
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("FriendsTrips")]
        public IActionResult GetFriendsTrips()
        {
            try
            {
                var userid = GetUserId();
                var trips =_service.GetFriendsTrips(userid);
                var tripWithCreator = new List<FriendtTrip>();
                trips.ForEach(trip =>
                {
                    double longitude = 0;
                    double latitude = 0;
                    trip.TripData.Destionations.ForEach(dest =>
                    {
                        if (dest.StopNumber == 1)
                        {
                            longitude = dest.Longitude;
                            latitude = dest.Latitude;
                        }
                    });

                    tripWithCreator.Add(new FriendtTrip
                    {
                        Tripid = trip.Id,
                        User = _service.GetCreator(trip.Id),
                        Longitude = longitude,
                        Latitude = latitude
                    });
                });
                return Ok(tripWithCreator);
                //legg til slik at det long og lat til første destinasjonen til turen returneres
            }
            catch (ApplicationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        private int GetUserId()
        {
            var key = Request.Headers["Authorization"].ToString().Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: key);
            return int.Parse(token.Claims.First(c => c.Type == "unique_name").Value);
        }

    }
}
