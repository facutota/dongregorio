import React from 'react';
import Card from './Card';

const CardList = ({camiones}) => {
	/*if(true) {
		throw new Error('NOOOOO');
	}*/
	return (
		<div>
		{
			camiones.map((user , i) => {
				return (
				<Card 
					key={camiones[i].id} 
					id={camiones[i].id} 
					name={camiones[i].name} 
					email={camiones[i].email}
					/>
				);
			})
		}
		</div>
    );
}

export default CardList;
