import React, { Component } from 'react';
import EntityCard from '../components/entityCard/entityCard';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
		return (
			<>
				<div className="entities">
					<Link className="entity" to="/users">
						<EntityCard entity="Users" />
					</Link>
					<Link className="entity" to="/profiles">
						<EntityCard entity="Profiles" />
					</Link>
					<Link className="entity" to="/posts">
						<EntityCard entity="Posts" />
					</Link>
					<Link className="entity" to="/follows">
						<EntityCard entity="Follows" />
					</Link>
					<Link className="entity" to="/likes">
						<EntityCard entity="Likes" />
					</Link>
					<Link
						className="entity"
						to="/countries"
					>
						<EntityCard entity="Countries" />
					</Link>
					<Link className="entity" to="/reports">
						<EntityCard entity="Reports" />
					</Link>
					<Link
						className="entity"
						to="/reporttypes"
					>
						<EntityCard entity="ReportTypes" />
					</Link>
					<Link
						className="entity"
						to="/usertypes"
					>
						<EntityCard entity="UserTypes" />
					</Link>
					<Link
						className="entity"
						to="/userpreferences"
					>
						<EntityCard entity="UserPreferences" />
					</Link>
					<Link
						className="entity"
						to="/attachments"
					>
						<EntityCard entity="Attachments" />
					</Link>
					<Link className="entity" to="/comments">
						<EntityCard entity="Comments" />
					</Link>
				</div>
			</>
		);
	}
}
export default HomePage;
