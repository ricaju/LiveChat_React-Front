import React, { Component } from 'react';
import gql  from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Query, subscription } from 'react-apollo';

 
class ChatBox extends Component {

	componentWillMount(){
		this.props.subscribeToNewComments();
	}

	render() {
		return (
			<div> 
				{this.props.messages.map( message =>  <li key={message.id}> {message.username} {message.text} </li> )}
			</div>
			);
	}
}




export default (ChatBox);