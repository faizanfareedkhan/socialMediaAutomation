import { createBrowserRouter } from "react-router-dom";
import websiteRoutes from "./websiteRoutes";
import authRoutes from "./authRoutes";
import NotFound from "@/pages/NotFound";
import dashboardRoutes from "./dashboardRoutes";
import Onboard from "./OnboardingRoutes";
import Confirmation from "./ConfirmationRoutes";

export const router = createBrowserRouter([
  ...websiteRoutes, // Website routes with layout
  ...authRoutes, // Authentication routes
  ...dashboardRoutes, // Dashboard routes with layout
  ...Onboard,
  ...Confirmation,
  { path: "*", element: <NotFound /> }, // 404 Page
]);
