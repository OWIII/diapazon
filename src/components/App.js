import { Route, Switch } from 'react-router-dom';
import get from 'lodash/get';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';
import { RandomVk } from './randomVk';
import { Auth } from './auth';
import { PrivateRoute } from './privareRouter';

const storage = localStorage.getItem('state');
const isLogged = get(JSON.parse(storage), 'auth.isLogged', false);

const App = () => {
	return (
		<div className="App">
			<Switch>
				<PrivateRoute exact auth={isLogged} path="/" component={() => <RandomImage />} />
				<PrivateRoute exact auth={isLogged} path="/randomVk" component={() => <RandomVk />} />
				<PrivateRoute exact auth={isLogged} path="/contacts" component={() => <Contacts />} />
				<Route exact path="/auth">
					<Auth />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
