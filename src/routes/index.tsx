import { Layout } from "@/layout";
import { Home } from "@/pages/home";
import { SignIn } from "@/pages/signin";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <SignIn/>
            },
            {
                path: "/home",
                element: <Home/>
            }
        ]
    }
])