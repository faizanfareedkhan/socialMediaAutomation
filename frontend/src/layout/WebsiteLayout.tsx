import Footer from "@/components/website/footer/Footer";
import Navbar from "@/components/website/navbar/Navbar";
import { Outlet } from "react-router";

const WebSiteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebSiteLayout;
