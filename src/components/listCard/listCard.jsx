import React from 'react';
import './listCard.css';

function ListCard(props) {
	return (
		<div className="list-card">
			<h1>{props.listTitle} List</h1>
			<ul>{props.children}</ul>
		</div>
	);
}

export default ListCard;
