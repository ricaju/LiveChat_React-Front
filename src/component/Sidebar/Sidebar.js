import React, {Component} from 'react';
//import './Sidebar.css';
import { Button, ButtonGroup } from 'reactstrap';
import messagesicon from './messagesicon.png';
import sportsicon from './sportsicon.png';
import techicon from './techicon.png';
import travelicon from './travelicon.png';
import logouticon from './logouticon.png';
import '../ChatContainerALL.css';


class Sidebar extends Component {
	
  	constructor(props) {
    super(props);
    this.state = {
    	isToggleOn: true
    };
  }

  handleClick = () => {
    this.setState({
      isToggleOn: false
  	})
  };

render() {
	return(
	<div className=" " id='cont'>
		<div className="groups">
			<ButtonGroup vertical>
				 {/*<Button onClick={this.handleClick}>
       				{this.state.isToggleOn ? 'ON' : 'OFF'}
     			 </Button>*/}
				  <Button className="Buttoni" color="success" onClick={this.handleClick}>
				  			<img className='imgbuttoni'  alt='messagesicon' src={messagesicon}/>
				  			{this.state.isToggleOn ? <div className="privateMessages"></div> : null} Private messages
				  	</Button>
					<Button className="Buttoni" color="warning"><img className='imgbuttoni' alt='travel' src={travelicon}/>
						TRAVEL
					</Button>
				    <Button className="Buttoni" color="info"><img className='imgbuttoni' alt='sportsicon' src={sportsicon}/>
				    	SPORT
				    </Button>
					<Button className="Buttoni" color="danger"><img className='imgbuttoni' alt='techicon' src={techicon}/>
						TECH
					</Button>
					<Button className="Buttoni" color="primary"><img className='imgbuttoni' alt='logout' src={logouticon}/>
						LOG OUT
					</Button>
			</ButtonGroup>
	    </div>		  
	</div>	
	);
}
}
	

export default Sidebar;