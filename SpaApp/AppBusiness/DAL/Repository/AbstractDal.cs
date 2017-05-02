using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppBusiness.DAL.Repository
{
    public abstract class AbstractDal<T> : InterfaceDal<T>
    {
        protected string privateConnectionString = string.Empty;
        protected List<T> Collection = new List<T>();

        public AbstractDal(string connectionString)
        {
            privateConnectionString = connectionString;
        }

        public virtual void Add(T type)
        {
            Collection.Add(type);
        }

        public virtual void Update(T type)
        {
            throw new NotImplementedException();
        }

        public virtual List<T> Search()
        {
            throw new NotImplementedException();
        }

        public abstract void Save();

    }
}
