import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./routes/AppRouter";
// language
import "./languages/i18n";
import AppInit from "./components/common/app/AppInit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppInit />
    <AppRouter />
  </>
);
