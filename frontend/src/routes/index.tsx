import { createBrowserRouter } from "react-router-dom";
import websiteRoutes from "./websiteRoutes";
import authRoutes from "./authRoutes";
import NotFound from "@/pages/NotFound";
import dashboardRoutes from "./dashboardRoutes";

export const router = createBrowserRouter([
  ...websiteRoutes, // Website routes with layout
  ...authRoutes, // Authentication routes
  ...dashboardRoutes, // Dashboard routes with layout
  { path: "*", element: <NotFound /> }, // 404 Page
]);
