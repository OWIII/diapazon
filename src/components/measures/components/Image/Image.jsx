import { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { API } from '../../../../common/constants';
import { ImageViewer } from './ImageViewer';
import isNil from 'lodash/isNil';

export const Image = (image) => {
	const [viewerIsOpen, setState] = useState(false);
	const { img, alt, title } = image;

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
						<h5>{title}</h5>
						<div className="measures__wrapper mt-2">
							<img
								className="measures__image"
								src={`${API}${img}`}
								alt={alt}
								onClick={handleSwitchStateViewer}
							/>
						</div>
					</>
				) : (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
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
