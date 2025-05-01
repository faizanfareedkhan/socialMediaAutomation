import OnBoardingLayout from "@/layout/OnBoardingLayout";
import StepFlow from "@/pages/auth/StepFlow";

const Onboard = [
  {
    path: "/onboarding",
    element: <OnBoardingLayout />,
    children: [
      { path: "flow", element: <StepFlow /> },
    ],
  },
];

export default Onboard;
