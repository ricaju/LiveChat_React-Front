import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ChatBox from './ChatBox';
import { Container, Row, Col } from 'reactstrap';
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

const ChatContainer = ({ params }) => (	
	<Query query={messages}
		variables={{ chatroomId: "1"}}>
			/>)

		{({ subscribeToMore, ...result }) => (
			<ChatBox
				{...result}
				subscribeToNewComments={() =>
					subscribeToMore({
						document: messageAddedSubscription,
						variables: (prev, {subscriptionData}) => {
							if (!subscriptionData.data) return prev;
							const newFeedItem = subscriptionData.data.messageAdded;

							return Object.assign({}, prev, {
								messages: {
									messages: [newFeedItem, ...prev.messages.messages]
								}
							});
						}
					})
				}
			/>
		)}
	</Query>
);

export default ChatContainer;   //need to export grapfql querry