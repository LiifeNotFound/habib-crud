import React, { Component, useState } from 'react';
import ListCard from '../../components/listCard/listCard';
import {MdModeEdit} from 'react-icons/md'
const axios = require('axios');

class List extends Component {
	// class constructor
	constructor(props) {
		// send props to super
		super(props);

		// define state of vars
		this.state = {
			users: [],
		};
	}

	// when comonent was mounted, do requests
	componentDidMount() {
		// send get request to get all users
		axios({
			url: `${global.serverUrl}users`,
		})
			.then((res) => {
				// set users
				this.setState({ users: res.data.results });
			})
			.catch((err) => {
				// log errors
				console.log(err);
			});
	}

	// render the component
	render() {
		// get users array from component state
		const { users } = this.state;

		// return
		return (
			<ListCard listTitle="User">
				{users.map((user) => (
					<li key={user.ID}>
						<div className="img">
                            <img src="http://t04-hendrick.vigion.pt/habib-images/default.png" alt=""/>
                        </div>
						<div className="data">
							<span>Name:</span>{' '}
							{user.Name}{' '}
							{user.Surname} <br />
							<span>Username:</span> @
							{user.Username}
						</div>
						<div className="edit">
                            <MdModeEdit />
                        </div>
					</li>
				))}
			</ListCard>
		);
	}
}

export default List;
