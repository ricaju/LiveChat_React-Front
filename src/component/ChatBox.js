import React from 'react';
import {gql ,Subscription} from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo'

/*const subscription = gql`
  subscription messageAdded($chatroomId: String!) {
    messageAdded(chatroomId: $chatroomId) {
    	text
    }
  }
`; */

const messages = gql` 
	query messages($chatroomId: String){
		messages(chatroomId:$chatroomId){
		id
		text
		}
	}
`; 
const ChatBox = ( {messages} ) => {
	return(	
		<div>     {/* set conteiner for whole chat box?*/}
			<div>		{/* set conteiner for sender and messages?*/}
				<h4>{messages} </h4>
				<p>{/*{message.content}*/} blablab</p>
			</div>
		</div>	
		)
};
export default ChatBox;