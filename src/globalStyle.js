import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: ${({ theme }) => theme.body};
  }
  section{
  transition: background .3s ease;
}
`;

export const lightTheme = {
  //   body: "linear-gradient(180deg, hsl(232, 19%, 15%) 30%, hsl(230, 17%, 14%) 70%)",
  body: "green",
  projects: "red",
  text: "#fff",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(228, 28%, 20%)",
  hover: "hsl(228, 28%, 40%)",
  icon: "#fff"
};

export const darkTheme = {
  body: "hsl(0, 0%, 100%)",
  projects: "yellow",
  text: "hsl(228, 12%, 44%)",
  toggle: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  content: "hsl(227, 47%, 96%)",
  hover: "hsl(226, 47%, 90%)",
  icon: "black"
};
