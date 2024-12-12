import Layout from "@/layout";
import { CRM } from "@/pages/crm";
import { Dashboard } from "@/pages/dashboard";
import { Ecommerce } from "@/pages/e-commerce";
import { HomePage } from "@/pages/home";
import { SignIn } from "@/pages/signin";
import { WebsiteAnalytics } from "@/pages/website-analytics";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn/>
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <HomePage/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/e-commerce",
                element: <Ecommerce/>
            },
            {
                path: "/crm",
                element: <CRM/>
            },
            {
                path: "/website-analytics",
                element: <WebsiteAnalytics/>
            }
        ]
    }
])