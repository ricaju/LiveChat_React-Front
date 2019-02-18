import React, {Component} from 'react';
import ChatContainer from './ChatContainer';
import SendingMessages from './SendingMessages';
import { Container, Row, Col } from 'reactstrap';

class ChatContainerSending extends Component {
	render() {
		return (
			<Container>						{/* Divading 'chat container' and form for 'sending messages' in two row */}
				<Row className="h-50">
					<Col>
						<ChatContainer/>
					</Col>
				</Row>
				<Row >
					<Col>
						<SendingMessages/>
					</Col>
				</Row>
			</Container>
		);
	}
}




export default ChatContainerSending;
