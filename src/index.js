import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./routes/AppRouter";
// language
import "./languages/i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppRouter />
  </>
);
