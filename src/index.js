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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: true,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppInit />
      <AppRouter />
    </Provider>
  </QueryClientProvider>
);
