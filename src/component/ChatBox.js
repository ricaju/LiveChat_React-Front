import React, { Component } from 'react';
import gql  from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query, subscription } from 'react-apollo';

const messageAddedSubscription = gql`
	{
		messageAdded(chatroomId: "1") {
			id
			username
			text
		}
	}
`; 

const messages = gql` 
	{
	messages(chatroomId: "1") {
		id
		username
		text
		}
	}
`; 
 
class ChatBox extends Component {

	componentDidlMount(){
		this.props.data.subscribeToMore({
			document: messageAddedSubscription,
			variables: {
				chatroomId: '1',
		updateQuery: (prev, { subscriptionData}) => {
			if (!subscriptionData) {
				return prev;
			}
		return{
			...prev,
		messages: [...prev.messages, subscriptionData.messageAdded],
		}
		}
		}
	})
	};
	render() {
		return (
			<Query query={messages}>
				{({ loading, error, data }) => {
			        if (loading) return <div>Loading...</div>
			        if (error) return <div>Error!</div>
    		
         		
         	return (
				<div>     {/* set conteiner for whole chat box?*/}
					<div>							{/* set conteiner for sender and messages?*/}
					{data.messages.map( message =>  <li key={message.id}>{message.username} {message.text}</li> ) }
					</div>
				</div>	
				);
         	}}
			</Query>
		);
	}
}




export default graphql(messages)(ChatBox);