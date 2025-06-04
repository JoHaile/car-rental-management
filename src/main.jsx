import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import "./styles/normalize.css";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
