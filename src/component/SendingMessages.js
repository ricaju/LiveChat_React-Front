import React, { Component }  from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Form, Input, Button, Container} from 'reactstrap'; 
import './SendingMessages.css';
import smileicon from './smileicon.png';
import gificon from './gificon.png';
import { setContext } from 'apollo-link-context';


/*const MUTATION_FOR_NEW_MESSAGES= gql` 
  mutation mutationForNewMessages($content: String!, $from: String!) {
    createMessage(content: $content, from: $from) {
      id
      sentAt                                        
      from
      content
    }
  }
  `;*/

class SendingMessages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			chatroomId: '1'
			//UserId:
		}
	}

	sendingMessage = async (e) => {	
		console.log(this.state.text)	
			const getToken = JSON.parse(localStorage.getItem('jwt'))

			const token = getToken.data.login || getToken.data.register

			await this.props.mutate({
				variables: {
					text: this.state.text, 
					chatroomId: this.state.chatroomId,
					token: token
					}
			});
			this.setState({ text: "" })  // erasing content
	}

	handleKeyPress = async (e) => {
		if(e.key === "Enter") {
			this.sendingMessage()
	}
	}


	render() {
		return(
			<div className="d-flex">
				<Container className="p-2 m col-10">
					<Form>
						<Input
							type="textarea"
							style={{maxwidth: "100%", boxsizing: "border-box", resize: "none", height: "25vh"}}
							name="text"
							id="message"
							placeholder="Enter your message(s)"
							onChange={e => this.setState( {text: e.target.value} )}
							onKeyPress={this.handleKeyPress}
							
						/>
					</Form>					
				</Container>
				<Container className=" p-1 col-2" className= 'btn-all' /*id= 'btns'*/>
					<Button id='btn1' 
						onClick={this.sendingMessage}
						>Send
					</Button>
					<Button className= 'btn-all' id ='btn2'
						><img style={{height: 25, width: 25}} alt='smile' src={smileicon}/>
					</Button>
					<Button  className= 'btn-all' id= 'btn3'
						><img style={{height: 25, width: 25}} alt='smile' src={gificon}/>
					</Button>

				</Container>
			</div>

				);
		}


}

const addMessageMutation= gql` 
  mutation addMessage($text: String!, $chatroomId: String!,$token: String!) {
    addMessage(text: $text, chatroomId: $chatroomId, token: $token) {
    	text

    }
  }
`;

export default graphql(addMessageMutation)(SendingMessages);