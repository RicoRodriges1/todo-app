import React from 'react';

export default class ItemFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = this.props.filter === name;
            const classs = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button" 
                    className={`btn ${classs}`}
                    key={name}
                    onClick={() => this.props.onFilterChange(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group" style={{height: "40px",width: "20%", float: "left", marginRight: "20px" }}>
                {buttons}
            </div>
       );
    };

};


