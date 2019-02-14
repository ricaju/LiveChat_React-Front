import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

class Login extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		username: '',
  		password: ''
  	}
	};

	handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  	};

	handleSubmit = (e) => {
	  e.preventDefault();
	};

	render() {
    return (
      <div className="Login">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Label className= 'white' htmlFor="username">Username</Label>
              <Input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Type your username"
                value={this.state.username}
                onChange = {e => this.handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <Label className= 'white' htmlFor="password">Password</Label>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Type your password"
                value={this.state.password}
                onChange = {e => this.handleChange(e)} />
          </FormGroup>
          <Button 
            type="submit" 
            name="submit" 
            id="button" 
            color="primary"
            >Login </Button>
        </Form>
      </div>
    );
  }
}

const LoginMutation = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`


export default Login;
