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
    public class DailyWorkController : ControllerBase
    {
        private IDailyWorkService _service;
        public DailyWorkController(IDailyWorkService service)
        {
            _service = service;
        }
        //AddHour(UserId,date, hour, data)
        //GetDate(UserId, date)
        //GetHour(UserId, date, hour)
        //GetStats(UserId) : returnerer dataen for aktivitet siden, altså hvor mange skritt som har blitt gått siste dagen, uken, 3m, iår, 1 år, 3 år og 5 år
    }
}
