using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SpaApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Home");
        }
    }
}
