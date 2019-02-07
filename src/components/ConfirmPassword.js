import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

class ConfirmPassword extends React.Component {
	render() {
	return(
		<Form>
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
		</Form>
	);
	}
}

export default ConfirmPassword;