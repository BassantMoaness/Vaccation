using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VaccationApi.Models;
using Type = VaccationApi.Models.Type;

namespace VaccationApi.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        DbSet<Type> Types { get;set;}
        DbSet<Days> Days { get; set; }
    }
}
