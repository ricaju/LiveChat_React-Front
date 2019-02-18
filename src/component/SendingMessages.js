import React, { Component }  from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Form, Input, Button} from 'reactstrap'; 

//sending date?
const MUTATION_FOR_NEW_MESSAGES= gql` 
  mutation mutationForNewMessages($content: String!, $from: String!) {
    createMessage(content: $content, from: $from) {
      id
      sentAt                                        
      from
      content
    }
  }
  `;

class SendingMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			from: ""
		}
	}

	sendingMessage = async (e) => {			//on pressing enter mutation content and sender (from)
		if (e.key === 'Enter') {
			await this.props.mutationForNewMessages({
				variables: {
					content: this.state.content, 
					from: this.state.from
					}
			});
			this.setState({ content: "" })  // erasing content
		}
	}


	render() {
		return(
			<div>
				<Form>
					<Input
						type="text"
						name="message"
						id="message"
						placeholder="Enter your message(s)"
						onChange={e => this.setState( {content: e.target.value} )}
						onKeyPress={this.sendingMessage}
					/>
					<Button 
					color="primary">Send</Button>
				</Form>
			</div>

				);
		}


}

export default SendingMessages; // //need to export grapfql querry