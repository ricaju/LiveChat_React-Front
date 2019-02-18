import React, {Component} from 'react';
import './Sidebar.css';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'reactstrap';
import messagesicon from './messagesicon.png';
import sportsicon from './sportsicon.png';
import techicon from './techicon.png';
import travelicon from './travelicon.png';


class Sidebar extends Component {
	render() {
		return(
		<div className="d-flex justify-content-start" id='cont'>
			<div className="groups">
				<ButtonGroup vertical>
					  <Button id= 'button1'color="success" onClick={privateMessages}><img style={{height: 80, width: 80}} alt='messagesicon' src={messagesicon}/>Private Messages</Button>
					  <Button id= 'button2'color="warning"><img style={{height: 80, width: 80}} alt='travel' src={travelicon}/></Button>
					  <Button id= 'button3' color="info"><img style={{height: 80, width: 80}} alt='sportsicon' src={sportsicon}/></Button>
					  <Button id= 'button4' color="danger"><img style={{height: 80, width: 80}} alt='techicon' src={techicon}/></Button>
				</ButtonGroup>
	     	</div>

		  <div className="privateMessages">Private messages</div>

		  <div className="input">
   			 <input id= 'inputArea' type="text" placeholder="CSS Grid Layout Module" />
 		 </div>
		</div>

		
	);}
}
	

export default Sidebar;