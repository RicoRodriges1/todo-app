import React from 'react';

import TodoListItem from './todo-list-item';

import './todo-list.css';

const TodoList = ({ todos, onDeleted, onChangedImportant, onChangedDone }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item; /* itemProps - rest параметр при деструкутризації, в ньому всі свойства крім id*/

        return (
                <li key={id} className="list-group-item">
                    <TodoListItem 
                        {...itemProps }
                        onDeleted={() => onDeleted(id)}
                        onChangedImportant={() => onChangedImportant(id)}
                        onChangedDone={() => onChangedDone(id)}
                /*!!! ІДЕНТИЧНО label={item.label}
                important={item.important} */ 
                    />
                </li>
        );
    });
        
	return (
        <div className="list">
            <ul className="list-group todo-list">
            { elements }
            </ul>
         </div>
		
	);
};

export default TodoList;