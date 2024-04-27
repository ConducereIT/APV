import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home.view";
import About from "../views/About.view";
import Cause from "../views/Cause.view";
import Faq from "../views/Faq.view";
import Contact from "../views/Contact.view";
import Curse from "../views/Curse.view";
import Login from "../views/Login.view";
import {loaderCurse} from "./Loader";
import Account from "../views/Account.view";
import RaceRegistrationView from "../views/RaceRegistration.view.tsx";
import Logout from "../views/Logout.view.tsx";
import Checkin from "../views/Checkin.view.tsx";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/cauza",
    element: <Cause/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/register-race",
    element: <RaceRegistrationView/>,
  },
  {
    path: '/curse',
    loader: loaderCurse,
    children: [
      {
        path: ":numeCursa?",
        element: <Curse/>,
      }
    ]
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "profil",
    element: <Account/>
  },
  {
    path: "logout",
    element: <Logout/>
  },
  {
    path:"checkin",
    element: <Checkin/>
  }
]);