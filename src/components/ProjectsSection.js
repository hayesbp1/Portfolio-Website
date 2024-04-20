import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Chess AI",
    description:
    "An interactive chess game built from scratch using PyGame, featuring an AI opponent that learns and improves its gameplay through machine learning techniques.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "S&P 500 Trading Bot",
    description:
      "An AI-powered trading bot that analyzes real-time S&P 500 price data and market trends to identify optimal entry points for buying, helping investors make informed decisions and potentially maximize returns.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
