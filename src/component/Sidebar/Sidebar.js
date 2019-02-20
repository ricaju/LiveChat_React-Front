import React, {Component} from 'react';
import './Sidebar.css';

import { Button, ButtonGroup } from 'reactstrap';
import messagesicon from './messagesicon.png';
import sportsicon from './sportsicon.png';
import techicon from './techicon.png';
import travelicon from './travelicon.png';
import PrivateMessages from './PrivateMessages';


class Sidebar extends Component {
	
  	constructor(props) {
    super(props);
    this.state = {
    	isToggleOn: true
    };
  }

  handleClick = () => {
      if(this.state.isToggleOn){
      	this.setState({
      		isToggleOn: false })
      }
      else{
      	this.setState({
      		isToggleOn: true })
      }
    }

	render() {
		return(
		<div className="d-flex justify-content-start" id='cont'>
			<div className="groups">
				<ButtonGroup vertical>
					  <Button id= 'button1'color="success" onClick={this.handleClick}>
					  			<img style={{height: 80, width: 80}} alt='messagesicon' src={messagesicon}/> 
					  </Button>

					  <Button id= 'button2'color="warning"><img style={{height: 80, width: 80}} alt='travel' src={travelicon}/></Button>
					  <Button id= 'button3' color="info"><img style={{height: 80, width: 80}} alt='sportsicon' src={sportsicon}/></Button>
					  <Button id= 'button4' color="danger"><img style={{height: 80, width: 80}} alt='techicon' src={techicon}/></Button>
				</ButtonGroup>
			</div>
			<div>
				{this.state.isToggleOn ?
				<PrivateMessages TrigerToggle={this.handleClick}/> : null
				}
			</div>	

	    </div>	
	);}
}
	

export default Sidebar;