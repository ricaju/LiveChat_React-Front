import React, {Component}  from 'react';
import './PrivateMessages.css';


class PrivateMessages extends Component {
	render() {
		return (
			<div>
				{this.props.TriggerToggle ? <div className="privateMessages">Private messages</div> : null} 
				<p> TU SAM </p>
			</div>
			);
	}



}

export default PrivateMessages;