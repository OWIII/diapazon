import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';

export const OptionsForm = ({
	loadImage,
	handleChangeCheckBox,
	isCheckedImage,
	isCheckedTitle,
	image,
}) => {
	const handleLoadImage = () => loadImage();

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
				<Button variant="success" onClick={handleLoadImage}>
					{!isNil(image) ? 'Обновить' : 'Загрузить'}
				</Button>
			</Form.Group>
		</Form>
	);
};

OptionsForm.propTypes = {
	loadImage: PropTypes.func,
	handleChangeCheckBox: PropTypes.func,
	isCheckedImage: PropTypes.bool,
	isCheckedTitle: PropTypes.bool,
	image: PropTypes.object,
};
