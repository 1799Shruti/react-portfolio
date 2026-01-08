import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/App.css";
import App from "./App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
