import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import chatlogo from './chatlogo.png';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 " options={{ max : 65 }} style={{ height: 450, width: 450 }}  >
 				<div className="Tilt-inner"> <img alt='logo' src={chatlogo}/> </div>
			</Tilt>	
		</div>
	);
}

export default Logo;