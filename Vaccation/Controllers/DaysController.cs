using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Models;
using VaccationApi.Services;

namespace VaccationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DaysController : ControllerBase
    {

        IDaysService _daysService;
        public DaysController(IDaysService service)
        {
            _daysService = service;
        }

        /// <summary>
        /// get user vaccation days by id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/id")]
        public IActionResult GetReminderVaccationDaysByUserId(int userId)
        {
            try
            {
                var userVaccation = _daysService.GetReminderVaccationDaysByUserId(userId);
                if (userVaccation == null) return NotFound();
                return Ok(userVaccation);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        /// <summary>
        /// upsate user vaccation days 
        /// </summary>
        /// <param name="userVaccation"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]
        public IActionResult UpdateVaccationModel(Days userVaccation)
        {
            try
            {
                var model = _daysService.UpdateVaccationModel(userVaccation);
                return Ok(model);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
