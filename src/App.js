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
import PageNotFound from './pages/err/404';

// global vars
global.serverUrl = "http://localhost:3001/"

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						component={HomePage}
					/>
					<Route
						exact
						path="/404"
						component={PageNotFound}
					/>
					<Route
						exact
						path="/users"
						component={Users}
					/>
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App