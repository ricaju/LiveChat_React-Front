import React, {Component} from 'react';
import './Sidebar.css';
import styled from 'styled-components';
import { Button, ButtonGroup } from 'reactstrap';
import messagesicon from './messagesicon.png';
import sportsicon from './sportsicon.png';
import techicon from './techicon.png';
import travelicon from './travelicon.png';


class Sidebar extends Component {
	/*constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  	}
	  handleClick() {
	    console.log('Click happened');
  	}*/
  	constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // this binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  	}

	render() {
		return(
		<div className="d-flex justify-content-start" id='cont'>
			<div className="groups">
				<ButtonGroup vertical>
					 {/*<Button onClick={this.handleClick}>
        				{this.state.isToggleOn ? 'ON' : 'OFF'}
     				 </Button>*/}

					  <Button id= 'button1'color="success" onClick={this.handleClick}>
					  			<img style={{height: 80, width: 80}} alt='messagesicon' src={messagesicon}/>
					  			{this.state.isToggleOn ? <div className="privateMessages">Private messages</div> : null} 
					  	</Button>
					  	
					  <Button id= 'button2'color="warning"><img style={{height: 80, width: 80}} alt='travel' src={travelicon}/></Button>
					  <Button id= 'button3' color="info"><img style={{height: 80, width: 80}} alt='sportsicon' src={sportsicon}/></Button>
					  <Button id= 'button4' color="danger"><img style={{height: 80, width: 80}} alt='techicon' src={techicon}/></Button>
				</ButtonGroup>
	     	</div>

		  

		  
		</div>

		
	);}
}
	

export default Sidebar;