import React, { Component } from 'react';
import ItemFilter from './item-filter';

import './search-panel.css';

export default class SearchPanel extends Component {

	state = {
		req: ''
	}

	onInputChange = (e) => {
		const req = e.target.value.toLowerCase();
		this.setState({ req });
		this.props.setReq(req);
	};

	render () {
		return (
			<div className="search-panel d-flex">
				<input className="mr-auto" 
					   style={{fontSize: '23px'}} 
					   placeholder={'Type here to search '} 
					   onInput={this.onInputChange}
					   value={this.state.req}
					   />
			</div>
		);	
	}
};
