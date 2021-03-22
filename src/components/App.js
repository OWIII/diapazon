import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';
import { Auth } from './auth';
import * as firebase from 'firebase';

const App = () => {
	useEffect(() => {
		const db = firebase.default.database();
		console.log(db);
	}, []);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<RandomImage />
				</Route>
				<Route exact path="/contacts">
					<Contacts />
				</Route>
				<Route exact path="/auth">
					<Auth />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
