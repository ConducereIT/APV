import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.view";
import About from "../views/About.view";
import Cause from "../views/Cause.view";
import Faq from "../views/Faq.view";
import Contact from "../views/Contact.view";
import Curse from "../views/Curse.view";
import { loaderCurse } from "./Loader";
import RaceRegistration from "../components/RaceRegistration.component";

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
]);