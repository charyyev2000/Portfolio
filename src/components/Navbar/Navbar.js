import React from "react";
import { NavbarContainer } from "./NavbarStyle";
import { Toggle } from "./Toggle";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavbarContainer>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </NavbarContainer>
  );
};

export default Navbar;
