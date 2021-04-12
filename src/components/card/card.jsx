import React from 'react';
import './card.css';

function ListCard(props) {
	return (
		<div className="list-card">
			{props.children}
		</div>
	);
}

export default ListCard;
