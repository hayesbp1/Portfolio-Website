import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import {useAlertContext} from "../context/alertContext";

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

const LandingSection = () => {
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type: 'hireMe',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await fetch('https://formspree.io/f/mdoqwgvj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          onOpen({
            type: 'success',
            message: 'Form submitted successfully!',
          });
          actions.resetForm();
        } else {
          onOpen({
            type: 'error',
            message: 'Something went wrong, please try again later!',
          });
        }
      } catch (error) {
        onOpen({
          type: 'error',
          message: 'Something went wrong, please try again later!',
        });
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
  <FormLabel htmlFor="name">Name</FormLabel>
  <Input
    id="name"
    name="name"
    {...formik.getFieldProps('name')}
  />
  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
</FormControl>

<FormControl isInvalid={formik.touched.email && formik.errors.email}>
  <FormLabel htmlFor="email">Email Address</FormLabel>
  <Input
    id="email"
    name="email"
    type="email"
    {...formik.getFieldProps('email')}
  />
  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
</FormControl>

<FormControl isInvalid={formik.touched.message && formik.errors.message}>
  <FormLabel htmlFor="message">Your message</FormLabel>
  <Textarea
    id="message"
    name="message"
    height={250}
    {...formik.getFieldProps('message')}
  />
  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
</FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={formik.isSubmitting}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;