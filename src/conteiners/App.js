import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Username from '../components/Username';
import Email from '../components/Email';
import Password from '../components/Password';
import ConfirmPassword from '../components/ConfirmPassword';
import SubmitButton from '../components/SubmitButton';

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
    console.log('dodali smo username:' + this.state.username.value);
    
  }


  render() {
    return (
      <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> {/*staviti u css?*/}
        <div className="columns">
          <div className="col-md-12 centered bg-green" style={{height: '600px', width: '300px'}}>
            <h3 className="tc">Registration</h3>
            <Username username={this.handleChange}/>
            <Email/>
            <Password/>
            <ConfirmPassword/>
            <SubmitButton onClick={ () => this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
