import React, { Component } from 'react';
import gql  from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query, subscription } from 'react-apollo';
import SendingMessages from './SendingMessages';
import './ChatBox.css';

/*const messageAddedSubscription = gql`
    subscription($chatroomId: String!){
    messageAdded(chatroomId: $chatroomId ) {
    	id 
    	username
    	text
    }
  }
`; */

const messagesQuery = gql` 
	{
	messages(chatroomId: "1") {
		id
		username
		text

	}
}
`; 
 
class ChatBox extends Component {

	/*componentWillMount(){
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
		messagesQuery: [...prev.messages, subscriptionData.messageAdded],
		}
		}
		}
	})
	};*/
	render() {
		return (
			<Query query={messagesQuery}>
				{({ loading, error, data }) => {
			        if (loading) return <div>Loading...</div>
			        if (error) return <div>Error!</div>
    		
         		
         	return (
				<div>     {/* set conteiner for whole chat box?*/}
					<div>							{/* set conteiner for sender and messages?*/}
					{data.messages.map( message =>  
						<li className='listItems' key={message.id}>
						<span className='userName'>{message.username}</span> + " "
						<span className='messages'>{message.text}</span>
						</li> ) }
					</div>
				</div>	
				);
         	}}
			</Query>
		);
	}
}




export default graphql(messagesQuery)(ChatBox);