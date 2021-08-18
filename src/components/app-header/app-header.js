import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done}) => {
	return (
		<div className="app-header d-flex">
			<h1 className="mr-auto">Todo list</h1>
			<h2>{toDo} to do. {done} tasks done.</h2>
		</div>
	);
};

export default AppHeader;