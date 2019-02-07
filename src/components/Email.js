import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class Email extends React.Component {
	render() {
	return(
		<Form>
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
	    </Form>
	);
	}
}

export default Email;