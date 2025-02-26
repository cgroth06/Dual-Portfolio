import { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toast = useToast(); // For success messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "userName") setUserName(value);
    if (name === "message") setMessage(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form input
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Please enter a valid email address and name.");
      return;
    }
    if (!message) {
      setErrorMessage("Please write a message to send.");
      return;
    }

    try {
      await emailjs.send(
        "service_v2n40k7",
        "template_g3kd63k",
        { user_email: email, user_name: userName, message },
        "hbsbRA2y4oU1GLXV7"
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear form
      setEmail("");
      setUserName("");
      setMessage("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <Box
      minH="calc(100vh - 270px)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={6}
    >
      <Heading mb={4}>Contact Us</Heading>

      <Box as="form" w="100%" maxW="500px" onSubmit={handleFormSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="userName"
            value={userName}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message here"
            required
          />
        </FormControl>

        {errorMessage && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        <Button colorScheme="teal" bg="teal.200" type="submit" w="full" textColor={"black"}>
          Submit
        </Button>
      </Box>

      <Box mt={4} fontSize="sm">
        <strong>Email:</strong> christopher.m.groth@gmail.com
      </Box>
    </Box>
  );
}

export default Contact;
