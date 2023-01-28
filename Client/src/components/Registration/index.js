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
import axios from 'axios'




class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: 'Jon',
      LastName: 'Doe',
      Username: 'johndoe',
      Email: 'johndoe@example.com',
      Password: 'password',
    };
  }

    //assigns user input to object attribute to be sent out
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }



    handleSubmit = (event) => {
      event.preventDefault();
      const user = {
          FirstName: this.state.firstName,
          LastName: this.state.lastName,
          Username: this.state.username,
          Email: this.state.email,
          Password: this.state.password,
      };
      axios.post(baseUrl + 'api/Users', user)
      .then(response => {
          console.log('Success:', response.data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
      console.log(this.state.FirstName)
  }
  
  render() {
  return (
    <>


      <Container>
        
        <FormWrap>
          <FormContent>
            <Form action="#" onSubmit={this.handleSubmit}>
              <FormH1>Register your account</FormH1>

              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput type="text" required name="firstName"
              value={this.state.firstName} />

              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput type="text" required name="lastName"
              value={this.state.lastName} />

              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="text" required name="username"
              value={this.state.username} />

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required name="email"
              value={this.state.email} />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required name="password"
              value={this.state.password} />

              <NavBtnLink type="submit">
                Continue
              </NavBtnLink>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
};

export default SignIn;
