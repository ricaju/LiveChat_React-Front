import React, { Component } from 'react';
import gql  from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query } from 'react-apollo';

/*const subscription = gql`
  subscription messageAdded($chatroomId: String!) {
    messageAdded(chatroomId: $chatroomId) {
    	text
    }
  }
`; */

const messages = gql` 
	{
	messages(chatroomId:"1") {
		id
		text
	}}
`; 
 
class ChatBox extends Component {
	render() {
		return (
			<Query query={messages}>
				{({ loading, error, data }) => {
			        if (loading) return <div>Loading...</div>
			        if (error) return <div>Error!</div>
    
         		 
         	return (
				<div>     {/* set conteiner for whole chat box?*/}
					<div>							{/* set conteiner for sender and messages?*/}
					{data.messages.map( message =>  <li key={message.id}> {message.text}</li> ) }
					</div>
				</div>	
				);
         	}}
			</Query>
		);
	}
}



export default graphql(messages)(ChatBox);