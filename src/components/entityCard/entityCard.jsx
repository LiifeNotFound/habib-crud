import React from 'react';
import './entityCard.css'

function entityCard({entity,onManageClick }) {
	return (
		<div className="entity-card">
			<h1>{entity}</h1>
		</div>
	);
}

export default entityCard;
