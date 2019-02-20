import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBox from './ChatBox';

import './ChatContainer.css';

/*import { Container, Row, Col } from 'reactstrap';*/


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

			<div className="wrapper">
					<div className='rows'>
						<aside className="aside aside-1">Aside 1</aside>
	  					<aside className="aside aside-2">Aside 2</aside>
  					</div>
  					<div className='columns'>
	  					<div className="container1">
						test TEST TEST TEST
					 	{/*{chatHistory.map(message => (                          //looping through chatHistory and showing it in ChatBox component
							<ChatBox key={message.id} message={message} />
						))}*/}
						</div>
						<div className='container2'>
						input
						</div>
					</div>

			</div>
			);
		}
	}

export default ChatContainer;   //need to export grapfql querry