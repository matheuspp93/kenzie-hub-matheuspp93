import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

import GlobalStyle from "./style/globlal";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
