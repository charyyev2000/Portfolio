import React, { useState } from "react";
import { ProjectsData } from "./ProjectsData";
import { Container, ProjectsContainer, ProjectsSection } from "./ProjectsStyle";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Project from "./Project/Project";

const Projects = () => {
  //ModalOpen
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  // test
  const [layoutId, setlayoutId] = useState(false);

  const expander = (id) => {
    if (modalOpen !== true) {
      setlayoutId(id);
      setModalOpen(true);
    } else {
      setlayoutId(null);
      setModalOpen(false);
    }
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <ProjectsSection id="projects" layout>
        {ProjectsData.map((item) => {
          return (
            <Container
              layoutId={item.id}
              onClick={() => expander(item.id)}
              key={item.id}
            >
              <motion.span
                layoutId="header"
                style={{ display: "inline-block" }}
              >
                {item.header}
              </motion.span>
            </Container>
          );
        })}
        <AnimatePresence>
          {modalOpen && <Project expander={expander} id={layoutId} />}
        </AnimatePresence>
      </ProjectsSection>
    </AnimateSharedLayout>
  );
};

export default Projects;
