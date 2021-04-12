import React, { Component } from 'react';
import Card from '../../components/card/card';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import CreateButton from '../../components/createButton/createButton';
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
			<>
				<CreateButton>
					<Link to="/users/create">
						<IoMdAdd />
					</Link>
				</CreateButton>
				<Card listTitle="User List">
					<ul>
						<h1>Users List</h1>
						{users.map((user) => (
							<li key={user.ID}>
								<div className="img">
									<img
										src="http://t04-hendrick.vigion.pt/habib-images/default.png"
										alt=""
									/>
								</div>
								<div className="data">
									<span>
										Name:
									</span>{' '}
									{
										user.Name
									}{' '}
									{
										user.Surname
									}{' '}
									<br />
									<span>
										Username:
									</span>{' '}
									@
									{
										user.Username
									}
								</div>
								<div className="edit">
									<Link to="/users/update">
										<MdModeEdit />
									</Link>
								</div>
							</li>
						))}
					</ul>
				</Card>
			</>
		);
	}
}

export default List;
