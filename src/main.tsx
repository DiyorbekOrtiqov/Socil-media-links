import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>
);