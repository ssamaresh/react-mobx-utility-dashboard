import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Provider } from 'mobx-react';

import TodoList from './todo-list';
import TodoStore from './app-state';

const connect = str => Comp => inject([str])(observer(Comp)); // helper function

const App = connect('lists')(
	class App extends Component {

		addNewList = value => {
			const { lists } = this.props;
			lists.set(value, new TodoStore());
		};

		render() {
			const { lists } = this.props;
			return (
				<div className = 'app'>
					<h1>Kanban</h1>
					<div className = 'app__add-todo'>
						<h3>Add New List</h3>
						<form
							onSubmit = { event => { 
								event.preventDefault();
								this.addNewList(this.input.value)
							} }
						>
							<input
								type = 'text'
								ref={ x => (this.input = x) }
							/>
						</form>
					</div>
					<div className = 'app__todos-list'>
						{
							Array.from(lists).map((item, index) => (
								<Provider key = { index } todolist = { item }>
									<TodoList />
								</Provider>
							))
						}
					</div>
				</div>
			);
		}
	}
)


export default App;
