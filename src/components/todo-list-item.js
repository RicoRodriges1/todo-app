import React from 'react';
import TodoList from './todo-list';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render() {

        const { label, onDeleted, onChangedImportant, onChangedDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if ( important ) {
            classNames += ' important';
        }
    
        return (
            <span className={classNames}>  
                <span className="todo-list-item-label" onClick={onChangedDone}>{ label }</span>
                
                    <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onChangedImportant}><i className="fa fa-exclamation"/></button>
                    <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}><i className="fa fa-trash-o"/></button>
            </span>
        );
    };
};
