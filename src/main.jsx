import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ToastPositionProvider } from "./contexts/toast-position.context.jsx";
import "./style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastPositionProvider>
      <App />
    </ToastPositionProvider>
  </React.StrictMode>
);
