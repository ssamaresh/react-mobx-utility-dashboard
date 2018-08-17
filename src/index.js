import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import TodoStore from './app-state';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'light',
	}
});

const listOfLists = observable.map({
	Todo1: new TodoStore(),
	Todo2: new TodoStore()
});

ReactDOM.render(
    <MuiThemeProvider theme = { theme }>
        <Provider lists = { listOfLists }>
            <App/>
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root')
);

registerServiceWorker();
