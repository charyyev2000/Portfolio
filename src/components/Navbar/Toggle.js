import React from "react";
import styled, { css } from "styled-components";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const ToggleContainer = styled.div``;
const Logo = css`
  font-size: 50px;
  transition: all 1s ease;
  color: ${({ theme }) => theme.icon};
`;

const SunLogo = styled(BsSun)`
  ${Logo};
  //   color: #fff;
`;

const MoonLogo = styled(BsMoon)`
  ${Logo}
`;

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === "light" ? <SunLogo /> : <MoonLogo />}
    </ToggleContainer>
  );
};
