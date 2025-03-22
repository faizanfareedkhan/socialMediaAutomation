import Header from "@/components/dashboard/header/Header";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
