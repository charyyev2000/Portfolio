import React from "react";
import reactDom from "react-dom";
import HorizontalScroll from "react-scroll-horizontal";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./globalStyle";

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
