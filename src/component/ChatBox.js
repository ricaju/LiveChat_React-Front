import React from 'react';
import gql from 'graphql-tag';
import Subscription from 'graphql-tag';
import { graphql } from 'react-apollo';

const subscription = gql`
  subscription messageAdded($chatroomId: String!) {
    messageAdded(chatroomId: $chatroomId) {
    	text
    }
  }
`;

const ChatBox = ( {message} ) => {
	return(
		<div>         {/* set conteiner for whole chat box?*/}
			<div>		{/* set conteiner for sender and messages?*/}
				<h4>{/*{message.from}*/} poruka od IVONE</h4>
				<p>{/*{message.content}*/} ivonina poruka</p>
			</div>
		</div>
		);
}

export default ChatBox;