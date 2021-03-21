import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from '../navbar';

export const Auth = () => {
	return (
		<>
			<NavBar showMenu={false} />
			<Container className="mt-5">
				<Row className="justify-content-md-center">
					<Col className="col-md-8 col-sm-12 col-lg-6 col-xl-4">
						<Form className="form__auth">
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Логин</Form.Label>
								<Form.Control type="email" placeholder="Введите email" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Пароль</Form.Label>
								<Form.Control type="password" placeholder="Введите пароль" />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Запомнить меня" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Войти
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};
