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
position: relative;
  width: 80vw;
  height: 80vh;
  background: white;
  border-radius: 20px;
overflow:hidden;

  .back-btn {
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 1.5rem;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor:pointer;
    // background: #fff;
`;
