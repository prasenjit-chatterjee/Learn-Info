using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppBusiness.DAL.Repository
{
    public interface InterfaceDal<T>
    {
        void Add(T type);
        void Update(T type);
        List<T> Search();
        void Save();
    }
}
