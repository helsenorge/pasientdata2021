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
    public class ChallengeController : ControllerBase
    {
        private IChallengeService _service;
        public ChallengeController(IChallengeService service)
        {
            _service = service;
        }
        //Create(userid, Goaldescription)
        //GetAllByUserId(userid)
        //GetByChallengeId(challengeid)
        //Update(challengeid, NewGoaldescription)
        //Delete(challengeid)
        //AddPartChallenge(challengeid, GoalDescription, steps)
        //UpdatePartChallenge(partChallengeId, )
        //DeletePartChallenge(partChallengeId)

    }
}
