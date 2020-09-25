import React from 'react';
import Tilt from 'react-tilt';
import truck from './truck.png';
import './Logo.css'

const Logo = () => {
	
	return (
			<div className= 'ma5 mt4 center'>
				<Tilt className="Tilt br-100 shadow-2" options={{ max : 40 }} style={{ height: 120, width: 120 }} >
		 			<div className="Tilt-inner pa3 ">
		 				 <img style={{paddingTop: '5px'}}alt="logo camion" src={truck}/> 
		 			</div>
				</Tilt>
			</div>
			);
}


export default Logo;