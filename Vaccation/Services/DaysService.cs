using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Data;
using VaccationApi.Models;
using VaccationApi.ViewModels;
using Type = VaccationApi.Models.Type;

namespace VaccationApi.Services
{
    public class DaysService : IDaysService
    {

        private DataContext _context;
        public DaysService(DataContext context)
        {
            _context = context;
        }
        /// <summary>
        /// get reminder vaccation days by user id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>DaysModel</returns>
        public Days GetReminderVaccationDaysByUserId(int userId)
        {
            Days usderDays;
            try
            {
                usderDays = _context.Find<Days>(userId);
            }
            catch (Exception)
            {
                throw;
            }
            return usderDays;
        }


        /// <summary>
        ///   edit reminder vaccation days
        /// </summary>
        /// <param name="vaccationDays"></param>
        /// <returns></returns>
        public ResponseModel UpdateVaccationModel(Days vaccationDays)
        {
                ResponseModel model = new ResponseModel();
                try
                {
                    Days userDays = GetReminderVaccationDaysByUserId(vaccationDays.UserId);
                    if (userDays != null)
                    {
                    userDays.AnnualDays = vaccationDays.AnnualDays;
                    userDays.CasualDays = vaccationDays.CasualDays;
                        _context.Update<Days>(userDays);
                        model.Messsage = "User Vaccation Days Update Successfully";
                    }
                    _context.SaveChanges();
                    model.IsSuccess = true;
                }
                catch (Exception ex)
                {
                    model.IsSuccess = false;
                    model.Messsage = "Error : " + ex.Message;
                }
                return model;
            }
    }
}
