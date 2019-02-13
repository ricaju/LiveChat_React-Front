import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './Registration.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      usernameValid: "",      // za validaciju unosa 
      emailValid: "",
      passwordValid: "",
      confirmPasswordValid:"",
      SECRET : 'safadgjh7834hurqwur82147fsdsfagji3435dfc',
     }
  };

  checkValid = () => {
  	let usernameValid = "";
  	//let emailValid = ""; // ostaviti JSX "type='email' validaciju?
  	let passwordValid = "";
  	let confirmPasswordValid = "";

  	if(!this.state.username) {
  		usernameValid = "Username cant be empty";
  	}
  	if(this.state.password.length < 5) {
  		passwordValid = "Password needs to have more than 5 characters";
  	}

  	if(this.state.password !== this.state.confirmPassword) {
  		confirmPasswordValid = "Password and confirm password don't match!";
  	}

 	if (usernameValid || passwordValid || confirmPasswordValid) {   //setstejtanje upozorenja
 		this.setState({ usernameValid, passwordValid, confirmPasswordValid });
 		return false;
 	}
  else {
    this.setState({ usernameValid, passwordValid, confirmPasswordValid });
    return true;
  }
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = async (e) => {    
    e.preventDefault();
    const check = this.checkValid();    
    if(!check) {
    	console.log("jedna od formi je prazna"); //test    
    }
    const { username, email, password } = this;
    const response = await this.props.mutate({
      variables: { username, password, email}
    })
    console.log(response);
  };



  render() {
    return (
      <div className="container" id= 'reg-info'> 
        <div className="columns">
          <div className="col-md-12" id='bc-form'>
          {/*<h3 className="tl pa3 white">Registration</h3>*/}
            <Form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup>
                  <Label className= 'white' htmlFor="username">Username</Label>
                  <Input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder="Type your username"
                  value={this.state.username}
                  onChange = {e => this.handleChange(e)}  />
                  <div style={{color: "red"}}> {this.state.usernameValid} </div>
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="email">Email</Label>
                  <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange = {e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="password"> Password </Label>
                  <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange = {e => this.handleChange(e)} />
                  <div style={{color: "red"}}> {this.state.passwordValid} </div>
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="password"> Confirm Password </Label>
                  <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="password1" 
                  placeholder="Confirm your password"
                  value={this.state.confirmPassword}
                  onChange = {e => this.handleChange(e)}
                  />
                  <div style={{color: "red"}}> {this.state.confirmPasswordValid} </div>
                </FormGroup>
                <Button type="submit" 
                  name="submit" 
                  id="button" 
                  color="primary"
                  >Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const registerMutation = gql`
  mutation
  CreateCheckout($storeusername: String!, $storepassword: String!, $storeemail: String!,$properties:CheckoutInput) {
    createCheckout(storeusername : $username, storepassword : $password, storeemail : $email,properties:$properties) {
      checkouttoken
      checkout{ username, password, email}
    }
  }
`;

export default graphql(registerMutation)(Registration);