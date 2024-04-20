import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/avatar.jpg";

const greeting = "Hello, I am Braden!";
const bio1 = "A Computer Science and Data science student at UC,";
const bio2 = "specializing in machine learning/AI";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src={avatarImage} size="2x1" />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;