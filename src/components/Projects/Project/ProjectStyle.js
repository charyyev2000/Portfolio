import styled from "styled-components";
import { css } from "@emotion/css";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Container = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  background: white;
  // display: flex;
`;
