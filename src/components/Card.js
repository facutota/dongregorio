import React from 'react';


const Card = ({id, name, email}) => {
	
	return (
		<div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='camion' src='https://icdn4.digitaltrends.com/image/digitaltrends_es/ups-tusimple-768x576.jpg' width='150' height='100' />
			<div>
				<h2>{name} </h2>
				<p>{email}</p>
			</div>
		</div>
			);
}


export default Card;