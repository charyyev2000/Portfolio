import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HomeIcon, NavbarContainer, ProjectIcon } from "./NavbarStyle";
import { Toggle } from "./Toggle";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <NavbarContainer>
      <Link smooth to="/#header">
        <HomeIcon />
      </Link>
      <Link smooth to="/#project">
        <ProjectIcon />
      </Link>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </NavbarContainer>
  );
};

export default Navbar;
