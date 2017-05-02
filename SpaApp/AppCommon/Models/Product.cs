using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppCommon.Models
{
    public class BaseModel
    {
        public long CreatedBy { get; set; }
        public long UpdatedBy { get; set; }
        public DateTime LastUpdatedTime { get; set; }
    }

    public class Product : BaseModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
    }
}
