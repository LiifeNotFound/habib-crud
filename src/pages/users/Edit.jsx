import React from 'react';
import Card from '../../components/card/card';

function Edit({ dml }) {
	// vars
	let title = ''; // title

	// check dml
	switch (dml) {
		case 'create':
			title = 'Create user';
			break;

		case 'update':
			title = 'Update user';
			break;
	}

	// set document title
	document.title = title;

	//#region Functions

    /**
     * Handle form submit
     * @param {Event} e 
     */
	const handleSubmit = (e) => {

        // prevent defautl
		e.preventDefault();
	};

	//#region

	return (
		<Card>
			<h1>Create User</h1>
			<form onSubmit={handleSubmit}></form>
		</Card>
	);
}

export default Edit;
