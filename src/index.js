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
    <AppInit />
    <AppRouter />
  </QueryClientProvider>
);
