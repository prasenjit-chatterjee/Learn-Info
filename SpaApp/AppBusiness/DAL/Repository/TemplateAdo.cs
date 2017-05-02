using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using AppCommon.Models;

namespace AppBusiness.DAL.Repository
{
    public abstract class TemplateAdo<T> : AbstractDal<T>
    {
        protected SqlCommand sqlCommand = null;
        protected SqlConnection sqlConnection = null;
        public TemplateAdo(string connectionString)
            : base(connectionString)
        {

        }

        void OpenConnection()
        {
            sqlConnection = new SqlConnection(privateConnectionString);
            sqlConnection.Open();
            sqlCommand = new SqlCommand();
            sqlCommand.Connection = sqlConnection;
        }

        protected abstract void InsertCommand(T type);
        protected abstract IList<T> SelectCommand();
        protected abstract void UpdateCommand(T type);

        void CloseConnection()
        {
            sqlConnection.Close();
        }

        public IList<T> Execute()
        {
            IList<T> result = new List<T>();
            OpenConnection();
            result = SelectCommand();
            CloseConnection();
            return result;
        }

        public void Execute(T type)
        {
            OpenConnection();
            InsertCommand(type);
            CloseConnection();
        }

        public override void Save()
        {
            foreach (var item in Collection)
            {
                Execute(item);
            }
        }

        public override List<T> Search()
        {
            return Execute().ToList();
        }
    }

    public class ProductDal : TemplateAdo<Product>
    {
        public ProductDal(string connectionString)
            : base(connectionString)
        {

        }
        protected override void InsertCommand(Product type)
        {
            type.LastUpdatedTime = DateTime.Now;
            sqlCommand.CommandText = "insert into dbo.Product(Name,Description,Quantity,CreatedBy,UpdatedBy,LastUpdatedTime) values ('" + type.Name + "','" + type.Description + "'," + type.Quantity + "," + type.CreatedBy + "," + type.UpdatedBy + ",'" + type.LastUpdatedTime + "')";
            sqlCommand.ExecuteNonQuery();
        }

        protected override IList<Product> SelectCommand()
        {
            IList<Product> result = new List<Product>();
            sqlCommand.CommandText = "select * from dbo.Product";
            var reader = sqlCommand.ExecuteReader();
            while (reader.Read())
            {
                result.Add(new Product()
                {
                    Id = Convert.ToInt64(reader["Id"]),
                    Name = Convert.ToString(reader["Name"]),
                    Quantity = Convert.ToInt32(reader["Quantity"]),
                    Description = Convert.ToString(reader["Description"]),
                    CreatedBy = Convert.ToInt64(reader["CreatedBy"]),
                    UpdatedBy = Convert.ToInt64(reader["UpdatedBy"]),
                    LastUpdatedTime = Convert.ToDateTime(reader["LastUpdatedTime"])
                });
            }
            reader.Close();
            return result;
        }

        protected override void UpdateCommand(Product type)
        {
            throw new NotImplementedException();
        }
    }
}
