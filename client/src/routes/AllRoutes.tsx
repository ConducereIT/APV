import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home.view";
import About from "../views/About.view";
import Cause from "../views/Cause.view";
import Faq from "../views/Faq.view";
import Contact from "../views/Contact.view";

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
]);
