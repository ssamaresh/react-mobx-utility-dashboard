import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Paper from '@material-ui/core/Paper';

const connect = str => Comp => inject([str])(observer(Comp));

const Display = connect('todolist')(({todolist}) => {
	const [ title, list] = todolist;
    return (
            <ul>
                <h3>{ title }</h3>
                {
                    list.items.map(item => <li key = { item }>{ item }</li>)
                }
            </ul>
    );
});

const Input = connect('todolist')(
    class Input extends React.Component {

		handleFormSubmit = event => {
			event.preventDefault();
            const [, list] = this.props.todolist;
			list.onSubmit(this.input.value);
			this.input.value = '';
		};

        render() {
            // reaction
            return (
			<form onSubmit = { this.handleFormSubmit }>
				<input type = 'text' ref = { x => (this.input = x) } />
			</form>
		  );
		}
    }
)

class TodoList extends Component {
	render() {
		return (
			<Paper>
				<Display />
				<Input />
			</Paper>
		);
	}
};

export default TodoList;
