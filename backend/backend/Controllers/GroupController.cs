using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroupController : ControllerBase
    {
        private IGroupService _service;
        public GroupController(IGroupService service)
        {
            _service = service;
        }

        //Create(Name, description)
        //Delete(GroupId)
        //Update(GroupId, description)
        //GetById(GroupId)
        //RemoveMember(GroupId, UserId)
        //AddMember(GroupId, UserId)
    }
}
