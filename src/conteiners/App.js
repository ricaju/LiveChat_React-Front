import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);  //ako ima vise od nule znaci da ima errora
  });
  return valid;
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      formErrors: {
        usernameErr: "",
        emailErr: "",
        passwordErr: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    let formErrors = this.state.formErrors;

    switch (username) {
      case 'username':
        formErrors.usernameErr = value.length < 4 && value.length > 0 ? 'minimu 4 characters reqired' : ""; //usernmae mora imati vise od 4 slova
        break;
      case 'password':
        formErrors.passwordErr = value.length < 6 && value.length > 0 ? 'password need to have more than 6 characters' : "";
         //pass mora imati vise od 6 znakova
     }
     this.setState({ formErrors, [name]: value}, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.prevetDefault();

    if(formValid(this.state.formErrors)){
      console.log('dodali smo username:' + this.state.username); //test
    }else {
      console.log('error');
    }  
  }




  render() {
    return (
      <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> {/*staviti u css?*/}
        <div className="columns">
          <div className="col-md-12 centered bg-green" style={{height: '600px', width: '300px'}}>
            <h3 className="tc">Registration</h3>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder="Type your username"
                  value={this.state.username}
                  onChange = {e => this.handleChange(e)}  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="password"> Password </Label>
                  <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange = {e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password"> Confirm Password </Label>
                  <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="password1" 
                  placeholder="Confirm your password"
                  value={this.state.confirmPassword}
                  onChange = {e => this.handleChange(e)}
                  />
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

export default App;
