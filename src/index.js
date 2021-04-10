import React from 'react';
import ReactDOM from 'react-dom';
import EntityCard from './components/entityCard/entityCard';
import './index.css';
import './global.css';

const switchPage = (page) => {
	alert(page);
};

ReactDOM.render(
	<div className="entities">
		<EntityCard entity="Users" onManageClick={switchPage} />
		<EntityCard entity="Profiles" onManageClick={switchPage} />
		<EntityCard entity="Posts" onManageClick={switchPage} />
		<EntityCard entity="Follows" onManageClick={switchPage} />
		<EntityCard entity="Likes" onManageClick={switchPage} />
		<EntityCard entity="Countries" onManageClick={switchPage} />
		<EntityCard entity="Reports" onManageClick={switchPage} />
		<EntityCard entity="ReportTypes" onManageClick={switchPage} />
		<EntityCard entity="UserTypes" onManageClick={switchPage} />
		<EntityCard
			entity="UserPreferences"
			onManageClick={switchPage}
		/>
		<EntityCard entity="Attachments" onManageClick={switchPage} />
		<EntityCard entity="Comments" onManageClick={switchPage} />
	</div>,
	document.getElementById('root')
);
