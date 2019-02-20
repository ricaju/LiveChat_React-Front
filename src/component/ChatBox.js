import React from 'react';

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