import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsLoading, getImage } from '../../store/actions';

import { Image } from './components/Image';
import { OptionsForm } from './components';

const RandomImage = ({ image, isLoading, callImageAction, setLoadingAction }) => {
	const [stateCheckbox, setStateCheckBox] = useState({
		isCheckedTitle: false,
		isCheckedImage: false,
	});

	const handleChangeCheckBox = (event) => {
		const { checked, id } = event.target;
		setStateCheckBox({
			...stateCheckbox,
			[id]: checked,
		});
	};

	return (
		<Container className="text-center mt-5">
			<Row className="col">
				<Col>
					<OptionsForm
						image={image}
						loadImage={callImageAction}
						isLoading={isLoading}
						handleChangeCheckBox={handleChangeCheckBox}
						{...stateCheckbox}
					/>
				</Col>
				<Col>
					{isLoading ? (
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					) : (
						<Image {...image} {...stateCheckbox} />
					)}
				</Col>
			</Row>
		</Container>
	);
};

RandomImage.propTypes = {
	image: PropTypes.object,
	isLoading: PropTypes.bool,
	callImageAction: PropTypes.func,
	setLoadingAction: PropTypes.func,
};

const mapToStateToProps = (store) => ({
	...store.image,
});

const mapDispatchToProps = (dispatch) => ({
	callImageAction: () => dispatch(getImage()),
	setLoadingAction: (status) => dispatch(setIsLoading(status)),
});

export default connect(mapToStateToProps, mapDispatchToProps)(RandomImage);
