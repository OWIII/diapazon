import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ showMenu }) => (
	<Navbar bg="dark" variant="dark">
		<Navbar.Brand as={NavLink} exact to="/">
			Diapazone
		</Navbar.Brand>
		{showMenu && (
			<Nav className="mr-auto">
				<Nav.Link as={NavLink} exact to="/">
					Измеритель
				</Nav.Link>
				<Nav.Link as={NavLink} exact to="/contacts">
					Контакты
				</Nav.Link>
			</Nav>
		)}
	</Navbar>
);
