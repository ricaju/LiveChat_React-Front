import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBox from './ChatBox';

/*const CHAT_HISTORY = gql`
	query AllChatsQuery {
	  chatHistory {
	    id
	    createdAt
	    from
	    content
	  }
	}
`;*/

class ChatContainer extends Component {
	render() {
		//const chatHistory = this.props.AllChatsQuery.chatHistory || []  // storing chat history in "chatHistory" or empty string (if there's no chat)
		return(
			<div className="container">
				<div className="container">
				
				 	{/*{chatHistory.map(message => (                          //looping through chatHistory and showing it in ChatBox component
						<ChatBox key={message.id} message={message} />
					))}*/}
				</div>
			</div>



			);
	}
}

export default ChatContainer;