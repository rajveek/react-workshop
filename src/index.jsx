import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({defaultOptions:{queries:{useErrorBoundary:true}}})
ReactDOM.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

