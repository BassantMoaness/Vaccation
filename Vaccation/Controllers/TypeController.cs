using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Services;

namespace VaccationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeController : ControllerBase
    {
        ITypeService _typeService;
        public TypeController(ITypeService service)
        {
            _typeService = service;
        }

        /// <summary>
        /// get all types
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]
        public IActionResult GetAllTypes()
        {
            try
            {
                var types = _typeService.GetTypesList();
                if (types == null) return NotFound();
                return Ok(types);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
