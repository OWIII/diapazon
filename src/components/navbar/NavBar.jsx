import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const NavBarComponent = ({ showMenu, signOut }) => {
	const history = useHistory();

	const handleSignOut = () => {
		signOut(history);
	};

	return (
		<Navbar bg="dark" variant="dark" className="justify-content-between">
			<div className="d-flex">
				<Navbar.Brand as={Link} to="/">
					Diapazone
				</Navbar.Brand>
				{showMenu && (
					<div className="d-flex">
						<Nav.Link
							className={history.location.pathname === '/' ? 'active' : ''}
							as={Link}
							to="/"
						>
							Измеритель
						</Nav.Link>
						<Nav.Link
							className={history.location.pathname === '/contacts' ? 'active' : ''}
							as={Link}
							to="/contacts"
						>
							Контакты
						</Nav.Link>
					</div>
				)}
			</div>
			{showMenu && (
				<Nav>
					<Button onClick={handleSignOut} variant="light">
						Выйти
					</Button>
				</Nav>
			)}
		</Navbar>
	);
};
