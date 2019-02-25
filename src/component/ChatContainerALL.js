import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar/Sidebar';
import ChatContainer from './ChatContainer';
import SendingMessages from './SendingMessages';
import './ChatContainerALL.css';

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

class ChatContainerALL extends Component {
	render() {
		//const chatHistory = this.props.AllChatsQuery.chatHistory || []  // storing chat history in "chatHistory" or empty string (if there's no chat)
		return(

			<div className="wrapper">
					<div className='rows'>
						<aside className="aside aside-1"><Sidebar/></aside>
	  					<aside className="aside aside-2">Toggle private messages</aside>
  					</div>
  					<div className='columns'>
	  					<div className="container1">
	  						<ChatContainer/>
						</div>
						<div className='container2'>
							<SendingMessages/>
						</div>
					</div>

			</div>
			);
		}
	}

export default ChatContainerALL;   //need to export grapfql querry