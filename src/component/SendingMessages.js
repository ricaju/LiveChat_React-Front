import React, { Component }  from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Form, Input, Button, Container} from 'reactstrap'; 
import './SendingMessages.css';
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
			<div className="d-flex">
				<Container className="p-2 col-6">
					<Form>
						<Input
							type="textarea"
							style={{resize: "none", width: "650px", height: "200px"}}
							name="text"
							id="message"
							placeholder="Enter your message(s)"
							onChange={e => this.setState( {content: e.target.value} )}
							onKeyPress={this.sendingMessage}
							
						/>
					</Form>					
				</Container>
				<Container className=" p-2" id= 'btns'>
					<Button id='btn1' 
						onClick={this.sendingMessage}
						>Send
					</Button>
					<Button id ='btn2'
						>Emoji
					</Button>
					<Button id= 'btn3'
						>Gif
					</Button>

				</Container>
			</div>

				);
		}


}

export default SendingMessages; // //need to export grapfql querry