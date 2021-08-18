import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AddItems from './components/add-items-bar/add-items-bar';
import ItemFilter from './components/item-filter';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

import './index.css';

export default class App extends Component {

	maxId = 1000;

	state = {
		todoData: [
			this.createTodoItem('Learn HTML'),
			this.createTodoItem('Learn css'),
			this.createTodoItem('Learn React'),
			this.createTodoItem('Learn redux')
		],
		req: '',
		filter: 'active'
	};

	createTodoItem(label) {
		return{
			label,
			important: false, 
			done: false,
			id: this.maxId++
		}
		
	};
 
	onAddItem = (text) => {

		const newItem = this.createTodoItem(text);

		this.setState(({todoData}) => {

			const newArr1 = [
				...todoData,
				newItem
			];

			return {
				todoData: newArr1
			};
		});
	};

	onChangedImportant = (id) => {
		this.setState(({todoData}) => {

			const indx = todoData.findIndex((el) => el.id === id);

			const oldItem = todoData[indx];
			const newItem = {
				...oldItem,
				important: !oldItem.important};


			const newArray = [
				...todoData.slice(0, indx), 
				newItem, 
				...todoData.slice(indx + 1)
			];

			return {
				todoData: newArray
			};
		});
	};

	onChangedDone = (id) => {

		this.setState(({ todoData }) => {

			const indx = todoData.findIndex((el) => el.id === id);

			const oldItem = todoData[indx];
			const newItem = {
				...oldItem,
				done: !oldItem.done};


			const newArray = [
				...todoData.slice(0, indx), 
				newItem, 
				...todoData.slice(indx + 1)
			];

			return {
				todoData: newArray
			};
		});
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const indx = todoData.findIndex((el) => el.id === id);
			
			const itemsBefore = todoData.slice(0, indx);
			const itemsAfter = todoData.slice(indx + 1);

			const newArray = [...itemsBefore, ...itemsAfter];

			return {
				todoData: newArray
			};
		});
	};

	/*searchItem(searchInput) {
		this.setState(() => {
			var searchedItems = [];
			for (var i = 0; i < this.state.todoData.length; i++){
				var label = this.state.todoData[i].label.toLowerCase();
				if (label.includes(searchInput)) {
					searchedItems.push(this.state.todoData[i]); 
				};
			}
			return {
				visibleItems: searchedItems
			};
		
		});
		console.log(searchInput.length, this.state.visibleItems);
	};*/

	searchItem(items, req) {
		if (req.length === 0) {
			return items;
		}
		
		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(req) > -1;
		});
	};

	setReq = (req) => {
		this.setState({ req });
	};

	filter(items, filter) {

		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	};

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	render() {

		const visibleItems = this.filter(
			this.searchItem(this.state.todoData, this.state.req), this.state.filter);

		const doneCount = this.state.todoData.filter((el) => el.done).length;

		const todoCount = this.state.todoData.length - doneCount;

		return (
			<div className="main-class">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel setReq={this.setReq}/>
					<ItemFilter 
						filter={this.state.filter}
						onFilterChange={this.onFilterChange}
					/>
				</div>
					
				<TodoList 
				todos={visibleItems}
				onDeleted={this.deleteItem }
				onChangedImportant={this.onChangedImportant}
				onChangedDone={this.onChangedDone}
				/>
				<AddItems onAddItem={this.onAddItem}/>
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));