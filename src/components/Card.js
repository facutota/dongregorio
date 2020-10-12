import React from 'react';


const Card = ({id, name, email,image}) => {
	
	return (
		<div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={name} src= {image} width='150' height='100' />
			<div>
				<h2>{name} </h2>
				<p>{email}</p>
			</div>
		</div>
			);
}


export default Card;