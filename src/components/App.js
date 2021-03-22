import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';
import { Auth } from './auth';
import * as firebase from 'firebase';
import { PrivateRoute } from './privareRouter';

const App = ({ isLogged }) => {
	console.log(isLogged);

	useEffect(() => {
		const db = firebase.default.database();
		console.log(db);
	}, []);

	return (
		<div className="App">
			<Switch>
				<PrivateRoute exact auth={isLogged} path="/" component={() => <RandomImage />} />
				<PrivateRoute exact auth={isLogged} path="/contacts" component={() => <Contacts />} />
				<Route exact path="/auth">
					<Auth />
				</Route>
			</Switch>
		</div>
	);
};

const mapStateToProps = (store) => ({
	...store.auth,
});

export default connect(mapStateToProps)(App);
