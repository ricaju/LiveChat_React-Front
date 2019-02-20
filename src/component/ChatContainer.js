import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ChatBox from './ChatBox'

/*const CHAT_HISTORY = gql`
	query AllChatsQuery {
	  chatHistory {
	    id
	    sentAt
	    from
	    content
	  }
	}
`;*/

class ChatContainer extends Component {
	render() {
		//const chatHistory = this.props.AllChatsQuery.chatHistory || []  // storing chat history in "chatHistory" or empty string (if there's no chat)
		return(
			<div className="d-flex">
				<Container className=" p-3" >
					<div>
						<ChatBox/>
						<ChatBox/>
					 	{/*{chatHistory.map(message => (                          //looping through chatHistory and showing it in ChatBox component
							<ChatBox key={message.id} message={message} />
						))}*/}
					</div>
				</Container>
			</div>



			);
	}
}

export default ChatContainer;   //need to export grapfql querry