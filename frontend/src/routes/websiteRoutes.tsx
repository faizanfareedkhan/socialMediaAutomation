import { RouteObject } from "react-router-dom";
import WebSiteLayout from "@/layout/WebsiteLayout";
import Home from "@/pages/website/home/Home";
import Pricing from "@/pages/website/pricing/Pricing";
import AIAssist from "@/pages/website/features/AIassist/AIAssist";
import Automation from "@/pages/website/features/automation/Automation";
import Ecommerce from "@/pages/website/features/e-commerce/Ecommerce";
import Professionals from "@/pages/website/features/professionals/Professionals";
import API from "@/pages/website/features/API/API";
import CopyWriting from "@/pages/website/features/copyWriting/CopyWriting";
import Content from "@/pages/website/features/content/Content";
import Scheduling from "@/pages/website/features/scheduling/Scheduling";
import Integrations from "@/pages/website/integrations/Integrations";
const websiteRoutes: RouteObject[] = [
  {
    path: "/",
    element: <WebSiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "content", element: <Content /> },
      { path: "scheduling", element: <Scheduling /> },
      { path: "copywriting", element: <CopyWriting /> },
      { path: "ai-assist", element: <AIAssist /> },
      { path: "automation", element: <Automation /> },
      { path: "e-commerce", element: <Ecommerce /> },
      { path: "professionals", element: <Professionals /> },
      { path: "api", element: <API /> },
      { path: "pricing", element: <Pricing /> },
      { path: "integrations", element: <Integrations /> },
    ],
  },
];

export default websiteRoutes;
