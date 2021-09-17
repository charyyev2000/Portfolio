import { motion } from "framer-motion";
import styled from "styled-components";

// export const ProjectsContainer = styled.section`
//   background: ${({ theme }) => theme.projects};
//   height: 100vh;
//   width: 100vw;
// `;

export const ProjectsSection = styled(motion.section)`
  background: ${({ theme }) => theme.projects};

  max-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 30px;
  padding: 70px 70px;
  position: relative;
  z-index: 4;

  .title {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-size: 50px;
    top: 0;
    left: 70px;
    color: #162936;
  }
`;

export const Container = styled.div`
  background: white;
  color: #000;
  position: relative;
  display: block;

  &::after {
    position: absolute;
    content: "Tap for more information";
    inset: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.5s;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
    cursor: pointer;
  }
`;
