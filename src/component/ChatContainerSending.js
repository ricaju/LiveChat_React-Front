import React, {Component} from 'react';
import ChatContainer from './ChatContainer';
import SendingMessages from './SendingMessages';
import { Container, Row } from 'reactstrap';

class ChatContainerSending extends Component {
	render() {
		return (
			<Container>						{/* Divading 'chat container' and form for 'sending messages' in two row */}
				<Row className="red">
					<ChatContainer/>
				</Row>
				<Row className="blue">
					<SendingMessages/>
				</Row>
			</Container>
		);
	}
}




export default ChatContainerSending;
