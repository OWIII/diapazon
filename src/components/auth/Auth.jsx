import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBarComponent } from '../navbar';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUserDataForm, signIn } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const Auth = ({ signInAction, setUserDataFormAction, isLogged }) => {
	const history = useHistory();
	const [stateForm, setStateForm] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		setUserDataFormAction(stateForm);
	}, [stateForm, setUserDataFormAction]);

	useEffect(() => {
		if (isLogged) {
			history.push('/');
		}
	}, [isLogged, history]);

	const handleInputChange = ({ target: { id, value } }) => {
		setStateForm({
			...stateForm,
			[id]: value.toString().trim(),
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		signInAction();
	};

	return (
		<>
			<NavBarComponent showMenu={false} />
			<Container className="mt-5">
				<Row className="justify-content-md-center">
					<Col className="col-md-8 col-sm-12 col-lg-6 col-xl-4">
						<Form className="form__auth" onSubmit={handleSubmitForm}>
							<Form.Group controlId="email">
								<Form.Label>Логин</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder="Введите email"
									onChange={handleInputChange}
								/>
							</Form.Group>
							<Form.Group controlId="password">
								<Form.Label>Пароль</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Введите пароль"
									onChange={handleInputChange}
								/>
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

const mapToStateToProps = (store) => ({
	...store.auth,
});

const mapDispatchToProps = (dispatch) => ({
	signInAction: () => dispatch(signIn()),
	setUserDataFormAction: (data) => dispatch(setUserDataForm(data)),
});

export default connect(mapToStateToProps, mapDispatchToProps)(Auth);
