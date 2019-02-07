import React from 'react';
import {Button} from 'reactstrap';

class SubmitButton extends React.Component {
	render() {
	return(
		<div>
			<Button type="submit" 
			name="submit" 
			id="button" 
			color="primary"
			>Submit</Button>
		</div>
	);
	}
}

export default SubmitButton;