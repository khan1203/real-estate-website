import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Home></Home>
    },
    {
        path: "/about",
        element:<About></About>
    },
    // ============ Authentication ==============
    {
        path: "/sign-in",
        element:<SignIn></SignIn>
    },
    {
        path: "/sign-up",
        element:<SignUp></SignUp>
    },
    {
        path: "/profile",
        element:<Profile></Profile>
    },

])

export default Router;