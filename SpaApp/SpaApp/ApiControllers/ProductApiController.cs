using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AppBusiness.DAL.Repository;
using AppCommon.Models;

namespace SpaApp.ApiControllers
{
    //[Authorize]
    [RoutePrefix("api/Product")]
    public class ProductApiController : ApiController
    {
        private ProductDal p1 = null;
        private string connStr = @"Data Source=(LocalDb)\v11.0;AttachDbFilename=|DataDirectory|\aspnet-SpaApp-20170426063554.mdf;Initial Catalog=aspnet-SpaApp-20170426063554;Integrated Security=True";
        public ProductApiController()
        {
            p1 = new ProductDal(connStr);
        }

        [HttpGet]
        //[Route("GetAll")]
        public IQueryable<Product> GetAll()
        {
            var yy = p1.Search();
            return yy.AsQueryable();
        }

        [HttpGet]
        //[Route("GetById")]
        public Product GetById(long id)
        {
            var yy = p1.Search().Where(n => n.Id == id).FirstOrDefault();
            return yy;
        }

        [HttpGet]
        //[Route("GetByName")]
        public IQueryable<Product> GetByName(string name)
        {
            return null;
        }

        [HttpPost]
        //[Route("Add")]
        public IHttpActionResult Add(Product product)
        {
            p1.Add(product);
            p1.Save();
            return Ok();
        }

        [HttpPut]
        //[Route("Update")]
        public IHttpActionResult Update(long id, Product product)
        {
            return Ok();
        }

        [HttpDelete]
        //[Route("Remove")]
        public IHttpActionResult Delete(long id)
        {
            return Ok();
        }
    }
}