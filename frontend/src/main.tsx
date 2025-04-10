import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { router } from "./router"; // Import your main router config
import "./index.css";
import { router } from "./routes";
import { NuqsAdapter } from "nuqs/adapters/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NuqsAdapter>
    <RouterProvider router={router} />
  </NuqsAdapter>,
);
