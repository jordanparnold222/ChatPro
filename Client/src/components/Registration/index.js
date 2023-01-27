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




class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Username: '',
      Email: '',
      Password: '',
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
      fetch(baseUrl + 'api/Users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
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
              <FormInput type="FirstName" required name="firstName"
              value={this.state.firstName} onChange={this.handleChange}/>

              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput type="LastName" required name="lastName"
              value={this.state.lastName} onChange={this.handleChange}/>

              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="Username" required name="username"
              value={this.state.username} onChange={this.handleChange}/>

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required name="email"
              value={this.state.email} onChange={this.handleChange}/>

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required name="password"
              value={this.state.password} onChange={this.handleChange}/>

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
