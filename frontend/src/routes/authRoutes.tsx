import AuthLayout from "@/layout/AuthLayout";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";

const authRoutes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
];

export default authRoutes;
