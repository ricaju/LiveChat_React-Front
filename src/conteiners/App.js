import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.prevetDefault();
    console.log('dodali smo username:' + this.state.username.value); //test
    
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
                  onChange = {this.handleChange}  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email"
                  onChange = {this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password"> Password </Label>
                  <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  onChange = {this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password"> Confirm Password </Label>
                  <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="password1" 
                  placeholder="Confirm your password"
                  onChange = {this.handleChange}
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
