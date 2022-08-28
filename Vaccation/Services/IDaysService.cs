using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Models;
using VaccationApi.ViewModels;

namespace VaccationApi.Services
{
    public interface IDaysService
    {

        /// <summary>
        /// get reminder vaccation days by user id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>DaysModel</returns>
        Days GetReminderVaccationDaysByUserId(int userId);

        /// <summary>
        ///  edit reminder vaccation days
        /// </summary>
        /// <param name="vaccationDays"></param>
        /// <returns></returns>
        ResponseModel UpdateVaccationModel(Days vaccationDays);
    }
}
