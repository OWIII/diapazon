import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';
import { Auth } from './auth';
import { PrivateRoute } from './privareRouter';

const App = ({ isLogged }) => {
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
