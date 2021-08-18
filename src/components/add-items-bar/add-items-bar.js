import React, { Component } from 'react';

import './add-items-bar.css';

export default class AddItems extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-items-bar d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"
                       value={this.state.label}></input>
                <button 
                type="button" 
                className="btn ml-auto btn-outline-secondary btn-sm float-right"
                onClick={this.onSubmit}
                >Add</button>
            </form>
        )
    }
    
};
