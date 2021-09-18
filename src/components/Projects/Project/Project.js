import React from "react";
import { Container, Backdrop } from "./ProjectStyle";
import { ProjectsData } from "../ProjectsData";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const Project = ({ id, expander }) => {
  const data = ProjectsData.find((item) => item.id === parseInt(id));

  return (
    <Backdrop
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      onClick={expander}
    >
      <Container
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        layoutId={id}
        layout
        key={data.id}
        exit={{ transition: { duration: 0.15 } }}
        style={{ pointerEvents: "auto" }}
      >
        <div className="back-btn" onClick={expander}>
          <GrClose />
        </div>
        <motion.span layoutId="header" style={{ display: "inline-block" }}>
          {data.header}
        </motion.span>
      </Container>
    </Backdrop>
  );
};

export default Project;
