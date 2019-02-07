import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class Password extends React.Component {
	render() {
	return(
		<Form>
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
		</Form>
	);
	}
}

export default Password;