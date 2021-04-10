import React from 'react';
import {BiWindowOpen} from 'react-icons/bi';
import './entityCard.css'

function entityCard({entity,onManageClick }) {
	return (
		<div className="entity-card">
			<h1>{entity}</h1>
			<button onClick={() => onManageClick(entity)}>
				<BiWindowOpen />
			</button>
		</div>
	);
}

export default entityCard;
