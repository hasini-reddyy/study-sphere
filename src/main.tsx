import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GoogleSignIn from "./components/GoogleSignIn.jsx";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <GoogleSignIn />
  </React.StrictMode>
);
