using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VaccationApi.Models
{
    public class Type
    {
        [Key]
        public int TypeId { get; set; }
        public string TypeName { get; set; } = string.Empty;
    }
          
}
