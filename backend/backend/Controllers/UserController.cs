using AutoMapper;
using backend.Helpers;
using backend.InputModels;
using backend.InputModels.User;
using backend.Model;
using backend.Services;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private IUserService _service;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public UserController(IUserService service, IConfiguration configuration, IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _configuration = configuration;
            _service = service;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [HttpPost("test")]
        public IActionResult Test()
        {
            return Ok("HEI");
        }

        [HttpPost("setUsername")]
        public IActionResult setUsername([FromBody] UsernameModel model)
        {
            try
            {
                _service.SetUsername(model.UserId, model.Username);
                return Ok(model.Username);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }



        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]AuthenticateModel model)
        {

            try
            {
                User user = _service.Authenticate(model.IdToken);
                var token = GetToken(user);
                return Ok(new
                {
                    Id = user.Id,
                    Name = user.Name,
                    Username = user.Username,
                    Token = token
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult delete([FromRoute]int id)
        {
            try
            {
                _service.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("search/{key}")]
        public IActionResult search([FromRoute]string key)
        {
            try
            {
                var users = _service.search(key);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            try
            {
                var user = _service.GetById(id);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }



        //delete
        //search
        //get by id

        
        private string GetToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return tokenString;
        }
    }
}
