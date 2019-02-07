import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class Username extends React.Component{
	render() {
	return(
		<Form>
	        <FormGroup>
	          <Label htmlFor="username">Username</Label>
	          <Input 
	          type="text" 
	          name="username" 
	          id="username" 
	          placeholder="Type your username"
	          onChange = {this.handleChange}  />
	        </FormGroup>
	    </Form>
	);
}
}

export default Username;