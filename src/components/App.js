import { Route, Switch } from 'react-router-dom';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';
import { Auth } from './auth';

const App = () => (
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

export default App;
