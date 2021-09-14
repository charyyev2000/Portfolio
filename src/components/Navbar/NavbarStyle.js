import styled, { css } from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";

export const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 7px;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${({ theme }) => theme.navbar};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.navbarborder};
  display: flex;
  align-items: center;
  z-index: 99;
`;

const NavIcon = css`
  font-size: 50px;
  color: black;
`;

export const HomeIcon = styled(AiFillHome)`
  ${NavIcon};
`;

export const ProjectIcon = styled(AiFillProject)`
  ${NavIcon};
`;
