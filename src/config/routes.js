import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Paginas
import AdminHome from '../pages/Admin'
import AdminSignIn from '../pages/Admin/SignIn'
import AdminUsers from '../pages/Admin/Users'
import MenuWeb from "../pages/Admin/MenuWeb/MenuWeb";
import Error404 from '../pages/Admin/Error404'
import Courses from "../pages/Courses";

import Home from '../pages/Home'
import Contact from '../pages/Contact'

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                path: "/admin/menu",
                component: MenuWeb,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/courses",
                component: Courses,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;