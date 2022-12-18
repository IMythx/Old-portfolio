import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "./store/modal-context";
import ScrollToTop from "./helpers/scrollToTop";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModalProvider>
      <ScrollToTop />
      <App />
    </ModalProvider>
  </BrowserRouter>
);
