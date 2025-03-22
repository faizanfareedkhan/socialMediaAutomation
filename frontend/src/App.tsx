import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import DashboardLayout from "./dashboard/layout/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/website/home/Home";
import AuthLayout from "./layout/AuthLayout";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      {/* Authentication Routes */}
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      {/* Dashboard Routes (Private) */}
      {/* <Route path="dashboard/*" element={<DashboardLayout />} /> */}

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
