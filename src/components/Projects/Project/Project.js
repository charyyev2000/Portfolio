import React from "react";
import { Container, Backdrop } from "./ProjectStyle";
import { ProjectsData } from "../ProjectsData";
import { motion } from "framer-motion";

const Project = ({ id, expander }) => {
  const data = ProjectsData.find((item) => item.id === parseInt(id));

  return (
    <Backdrop
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      onClick={expander}
    >
      <Container
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        layoutId={data.id}
        layout
        key={data.id}
        // transition={{ duration: 2 }}
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        exit={{ transition: { duration: 0.15 } }}
        style={{ pointerEvents: "auto" }}
      >
        <div onClick={expander}>x</div>
        <motion.span>{data.header}</motion.span>
      </Container>
    </Backdrop>
  );
};

export default Project;
