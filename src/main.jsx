import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/simple-projects">
      <App />
    </BrowserRouter>
  </StrictMode>
);
