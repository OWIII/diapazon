import { Form, Button } from 'react-bootstrap';

export const OptionsForm = ({ measures, SendForm }) => {
	return (
		<Form className="dark text-left">
			<Form.Group controlId="showName">
				<Form.Check
					variant="dark"
					className="dark"
					type="checkbox"
					label="Показывать название"
				/>
			</Form.Group>
			<Form.Group controlId="showImage">
				<Form.Check type="checkbox" label="Показывать изображение" />
			</Form.Group>
			<Form.Group>
				<Button variant="success" onClick={() => SendForm(measures)}>
					Выбрать
				</Button>
			</Form.Group>
		</Form>
	);
};
