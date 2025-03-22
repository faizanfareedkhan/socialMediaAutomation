import { RouteObject } from "react-router-dom";
import WebSiteLayout from "@/layout/WebsiteLayout";
import Home from "@/pages/website/home/Home";
import Pricing from "@/pages/website/pricing/Pricing";

const websiteRoutes: RouteObject[] = [
  {
    path: "/", // This is the main layout wrapper
    element: <WebSiteLayout />,
    children: [
      { index: true, element: <Home /> }, // Home Page ("/")
      { path: "pricing", element: <Pricing /> }, // Pricing Page ("/pricing")
      // Add more website pages here
    ],
  },
];

export default websiteRoutes;
