import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './components';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

import './styles/index.scss';

const Router = require('react-router-dom').BrowserRouter;

firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
