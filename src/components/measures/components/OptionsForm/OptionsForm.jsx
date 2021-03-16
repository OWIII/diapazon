import { Form, Button } from 'react-bootstrap';
import isNil from 'lodash/isNil';

export const OptionsForm = ({
	loadImage,
	handleChangeCheckBox,
	isCheckedImage,
	isCheckedTitle,
	image,
}) => {
	return (
		<Form className="dark text-left">
			<Form.Group controlId="showName">
				<Form.Check
					type="checkbox"
					id="isCheckedTitle"
					label="Показывать название"
					onChange={handleChangeCheckBox}
					checked={isCheckedTitle}
				/>
			</Form.Group>
			<Form.Group controlId="showImage">
				<Form.Check
					type="checkbox"
					id="isCheckedImage"
					label="Показывать изображение"
					onChange={handleChangeCheckBox}
					checked={isCheckedImage}
				/>
			</Form.Group>
			<Form.Group>
				<Button variant="success" onClick={() => loadImage(true)}>
					{!isNil(image) ? 'Обновить' : 'Загрузить'}
				</Button>
			</Form.Group>
		</Form>
	);
};
