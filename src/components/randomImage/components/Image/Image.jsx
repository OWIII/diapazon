import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';

import { API, showAlert } from '../../../../common';
import { ImageViewer } from './ImageViewer';

export const Image = ({ img, alt, title, isCheckedTitle, isCheckedImage }) => {
	const [viewerIsOpen, setState] = useState(false);

	const handleSwitchStateViewer = () => {
		setState((prevState) => {
			return !prevState;
		});
	};

	return (
		<Row>
			<Col className="text-left">
				{!isNil(img) ? (
					<>
						{isCheckedTitle && showAlert(title, 'success')}
						{isCheckedImage && (
							<div className="measures__wrapper mt-2">
								<img
									className="measures__image"
									src={`${API}${img}`}
									alt={alt}
									onClick={handleSwitchStateViewer}
								/>
							</div>
						)}
					</>
				) : (
					showAlert('Данных для отображения нет', 'dark')
				)}
				{!isNil(img) &&
					!isCheckedTitle &&
					!isCheckedImage &&
					showAlert('Вы не выбрали ни один параметр для показа', 'warning')}
			</Col>
			<ImageViewer
				isOpen={viewerIsOpen}
				seState={handleSwitchStateViewer}
				img={img}
				alt={alt}
				api={API}
			/>
		</Row>
	);
};

Image.propTypes = {
	img: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	isCheckedTitle: PropTypes.bool,
	isCheckedImage: PropTypes.bool,
};
