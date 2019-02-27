import React, {Component} from 'react';
<<<<<<< HEAD
import './Sidebar.css';

=======
//import './Sidebar.css';
>>>>>>> 378cdae689512c075efae5a7c0596669c7cdd047
import { Button, ButtonGroup } from 'reactstrap';
import messagesicon from './messagesicon.png';
import sportsicon from './sportsicon.png';
import techicon from './techicon.png';
import travelicon from './travelicon.png';
<<<<<<< HEAD
import PrivateMessages from './PrivateMessages';
=======
import logouticon from './logouticon.png';
import '../ChatContainerALL.css';
>>>>>>> 378cdae689512c075efae5a7c0596669c7cdd047


class Sidebar extends Component {
	
  	constructor(props) {
    super(props);
    this.state = {
    	isToggleOn: true
    };
  }

  handleClick = () => {
<<<<<<< HEAD
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
=======
    this.setState({
      isToggleOn: false
  	})
  };

render() {
	return(
	<div className="d-flex justify-content-start" id='cont'>
		<div className="groups">
			<ButtonGroup vertical>
				 {/*<Button onClick={this.handleClick}>
       				{this.state.isToggleOn ? 'ON' : 'OFF'}
     			 </Button>*/}
				  <Button id= 'button1'color="success" onClick={this.handleClick}>
				  			<img style={{height: 110, width: 110}} alt='messagesicon' src={messagesicon}/>
				  			{this.state.isToggleOn ? <div className="privateMessages"></div> : null} Private messages
				  	</Button>
					<Button id= 'button2'color="warning"><img style={{height: 110, width: 110}} alt='travel' src={travelicon}/>
						TRAVEL
					</Button>
				    <Button id= 'button3' color="info"><img style={{height: 110, width: 110}} alt='sportsicon' src={sportsicon}/>
				    	SPORT
				    </Button>
					<Button id= 'button4' color="danger"><img style={{height: 110, width: 110}} alt='techicon' src={techicon}/>
						TECH
					</Button>
					<Button id= 'button5' color="primary"><img style={{height: 105, width: 105}} alt='logout' src={logouticon}/>
					</Button>
			</ButtonGroup>
	    </div>		  
	</div>	
	);
}
>>>>>>> 378cdae689512c075efae5a7c0596669c7cdd047
}
	

export default Sidebar;