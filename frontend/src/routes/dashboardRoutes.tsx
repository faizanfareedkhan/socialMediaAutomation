import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages/dashboard/home/Home";
import Settings from "@/pages/dashboard/settings/Settings";
import { RouteObject } from "react-router-dom";

const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

export default dashboardRoutes;
