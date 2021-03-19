import { Navbar, Nav } from 'react-bootstrap';
import { Route, NavLink, Switch } from 'react-router-dom';

import { RandomImage } from './randomImage';
import { Contacts } from './contacts';

const App = () => (
	<div className="App">
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand as={NavLink} exact to="/">
				Diapazone
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={NavLink} exact to="/">
					Измеритель
				</Nav.Link>
				<Nav.Link as={NavLink} exact to="/contacts">
					Контакты
				</Nav.Link>
			</Nav>
		</Navbar>
		<Switch>
			<Route exact path="/">
				<RandomImage />
			</Route>
			<Route exact path="/contacts">
				<Contacts />
			</Route>
		</Switch>
	</div>
);

export default App;
