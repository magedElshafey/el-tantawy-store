import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./routes/AppRouter";
// language
import "./languages/i18n";
import AppInit from "./components/common/app/AppInit";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
// redux
import { Provider } from "react-redux";
import store from "./store/store";
// context
import GlobalContext from "./context/GlobalContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppInit />
      <GlobalContext>
        <AppRouter />
      </GlobalContext>
    </Provider>
  </QueryClientProvider>
);
