import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './Login.css';
<<<<<<< HEAD
import Logo from '../component/Logo/Logo.js';
=======
>>>>>>> parent of a282da6... version 1.1
=======
import Logo from './Logo/Logo.js';
>>>>>>> parent of 8ffd2f5... ccccc
=======
>>>>>>> parent of 6dff0b3... bbb
=======
>>>>>>> parent of a282da6... version 1.1
=======
>>>>>>> parent of 6dff0b3... bbb

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
    axios.post('/getToken', {   //token
      email: this.state.username,
      password: this.state.password
    }).then(res => sessionStorage.setItem('MP-jwt', res.data)); //MP = "moj prvi :)"
	};

	render() {
    return (
      <div className="Login">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of ca6b9ed... Revert "aaa"
=======
>>>>>>> parent of ca6b9ed... Revert "aaa"
      <div className="col-md-10" id='bc-login'>
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
=======
=======
>>>>>>> parent of a282da6... version 1.1
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" size="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="username"
              onChange={e => this.handleChange(e)}
            />
<<<<<<< HEAD
>>>>>>> parent of a282da6... version 1.1
=======
>>>>>>> parent of a282da6... version 1.1
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"        //value?
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> parent of 8ffd2f5... ccccc
=======
>>>>>>> parent of 6dff0b3... bbb
=======
>>>>>>> parent of a282da6... version 1.1
=======
>>>>>>> parent of 6dff0b3... bbb
          <Button
            block
            size="large"
            type="submit"
          >
            Login
          </Button>
        </form>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <Button 
            type="submit" 
            name="submit" 
            id="button" 
            color="primary"
            >Login </Button>
        </Form>
>>>>>>> parent of 71ac842... vracanje
>>>>>>> parent of 8ffd2f5... ccccc
=======
>>>>>>> parent of 6dff0b3... bbb
=======
>>>>>>> parent of ca6b9ed... Revert "aaa"
      </div>
=======
>>>>>>> parent of a282da6... version 1.1
=======
>>>>>>> parent of a282da6... version 1.1
=======
=======
>>>>>>> parent of 6dff0b3... bbb
      </div>
=======
>>>>>>> parent of a282da6... version 1.1
>>>>>>> parent of ca6b9ed... Revert "aaa"
      </div>
    );
  }
}


export default Login;
