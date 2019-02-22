import React, { Component } from 'react';
import gql  from 'graphql-tag';
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
	query{messages(chatroomId:"1") {
	  id
	  text
	}}
`; 
 
class ChatBox extends Component {
	render() {
		console.log(this.props)  //test
	return (	
		<div>     {/* set conteiner for whole chat box?*/}
			<div>
						{/* set conteiner for sender and messages?*/}
				<h4>{messages.text} </h4>
				<p>{/*{message.content}*/} blablab</p>
			</div>
		</div>	
		);
}
}



export default graphql(messages)(ChatBox);