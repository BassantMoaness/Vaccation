using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Data;

namespace VaccationApi.Services
{
    public class TypeService:ITypeService
    {

        private DataContext _context;
        public TypeService(DataContext context)
        {
            _context = context;
        }
        /// <summary>
        /// get list of all employees
        /// </summary>
        /// <returns></returns>
        public List<Type> GetTypesList()
        {
            List<Type> empList;
            try
            {
                empList = _context.Set<Type>().ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return empList;
        }
    }
}
