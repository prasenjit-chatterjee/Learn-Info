using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SpaApp.Controllers
{
    public class ProductController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Home");
        }

        public ActionResult ShowAll()
        {
            return PartialView("_ShowAll");
        }

        public ActionResult Add()
        {
            return PartialView("_Add");
        }

        public ActionResult Edit()
        {
            return PartialView("_Edit");
        }

        public ActionResult Delete()
        {
            return PartialView("_Delete");
        }
	}
}