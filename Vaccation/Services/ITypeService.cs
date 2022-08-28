using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VaccationApi.Services
{
    public interface ITypeService
    {
        /// <summary>
        /// get list of all Vaccation Type
        /// </summary>
        /// <returns></returns>
        List<Type> GetTypesList();
    }
}
