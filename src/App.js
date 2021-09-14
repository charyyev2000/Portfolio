import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import { ThemeProvider } from "styled-components";
import { AppContainer } from "./AppStyle";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { darkTheme, GlobalStyle, lightTheme } from "./globalStyle";

const App = () => {
  const [theme, setTheme] = useState("dark");

  //   darkTheme
  //save to localStorage
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <AppContainer>
        <BrowserRouter>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </BrowserRouter>
        <HorizontalScroll reverseScroll={true}>
          <Header />
          <Projects />
        </HorizontalScroll>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
