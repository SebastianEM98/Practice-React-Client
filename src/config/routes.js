import LayoutAdmin from "../layouts/LayoutAdmin";
import GeneralLayout from "../layouts/GeneralLayout";
/* Importamos los pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact";

const routesAdmin = [
  {
    path: "/admin/*",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

/* Ruta home, notfound */
const routesClient = [
  {
    path: "/",
    layout: GeneralLayout,
    component: Home,
  },
  {
    path: "/contact",
    layout: GeneralLayout,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: GeneralLayout,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;