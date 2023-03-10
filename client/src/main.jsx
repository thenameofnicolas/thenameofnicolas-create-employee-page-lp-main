import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import App from "./App";
import theme from "./theme";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
   
    <ChakraProvider theme={theme}>
    <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>

    </Router>
    </ChakraProvider>
 
  </React.StrictMode>
 
);
