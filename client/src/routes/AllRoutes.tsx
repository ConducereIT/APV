import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.view";
import About from "../views/About.view";
import Cause from "../views/Cause.view";
import Faq from "../views/Faq.view";
import Contact from "../views/Contact.view";
import Curse from "../views/Curse.view";
import Login from "../views/Login.view";
import { loaderCurse } from "./Loader";
<<<<<<< HEAD
import RaceRegistration from "../components/RaceRegistration.component";
=======
import Account from "../views/Account.view";
>>>>>>> e387d6ac4da6c2de157b01b6b5368f74bf2286f2

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cauza",
    element: <Cause />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/înscriere-curse",
    element: <RaceRegistration />,
  },
  {
    path: '/curse',
    loader: loaderCurse,
    children: [
      {
        path: ":numeCursa?",
        element: <Curse />,
      }
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "account",
    element: <Account />
  }
]);