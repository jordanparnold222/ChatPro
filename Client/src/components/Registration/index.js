import { useState } from "react";
import { withRouter } from "react-router-dom";
import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  NavBtn,
  NavBtnLink,
  baseUrl,
} from "./SigninElements";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  //assigns user input to object attribute to be sent out
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseUrl + "api/Users", formData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Register your account</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput
                type="text"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />

              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput
                type="text"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />

              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="text"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
              />

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <FormButton>Continue</FormButton>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
