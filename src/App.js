import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

// css
import './index.css';
import './global.css';

// pages
import HomePage from './pages/HomePage';
import Users from './pages/users/List';
import UsersEdit from './pages/users/Edit';
import PageNotFound from './pages/err/404';

// global vars
global.serverUrl = 'http://localhost:3001/';

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route
					exact
					path="/404"
					component={PageNotFound}
				/>

				<Route exact path="/users" component={Users} />
				<Route
					exact
					path="/users/create"
					component={() => (
						<UsersEdit dml="create" />
					)}
				/>
				<Route
					exact
					path="/users/update"
					component={() => (
						<UsersEdit dml="update" />
					)}
				/>

				<Redirect to="/404" />
			</Switch>
		</Router>
	);
};
