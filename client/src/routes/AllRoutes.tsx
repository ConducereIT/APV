import { createBrowserRouter, } from "react-router-dom";
import Home from "../views/Home.view";

export const allRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
])