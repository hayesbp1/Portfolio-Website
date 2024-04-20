// ResumeSection.js
import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const ResumeSection = () => {
  return (
    <Box
      backgroundColor="black"
      p={16} // Increase the padding to make the section bigger
      minHeight="50vh" // Set a minimum height for the section
      display="flex" // Use flexbox for centering content vertically
      flexDirection="column" // Stack the content vertically
      justifyContent="center" // Center the content vertically
      alignItems="center" // Center the content horizontally
      id="resume"
    >
      <Heading as="h2" size="2xl" mb={8} color="white">
        Download My Resume
      </Heading>
      <Link
        href="https://drive.google.com/file/d/1L59oi2CBorkN3J0sWcmBx2jHKByqCFMc/view?usp=sharing"
        download
        backgroundColor="blue.500"
        color="white"
        px={6}
        py={3}
        borderRadius="md"
        _hover={{ backgroundColor: "blue.600" }}
        fontSize="xl" // Increase the font size of the download button
      >
        <DownloadIcon mr={2} />
        Download Resume
      </Link>
    </Box>
  );
};

export default ResumeSection;