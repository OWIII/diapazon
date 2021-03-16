import { useEffect, useState } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { ALL_IMAGES_DEV } from '../../common/constants';
import { getAllImages } from '../../common/routers';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Image } from './components/Image';
import { OptionsForm } from './components/OptionsForm/OptionsForm';

export const RandomImage = () => {
	const [image, setImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [stateCheckbox, setStateCheckBox] = useState({
		isCheckedTitle: false,
		isCheckedImage: false,
	});

	const randomElementOfArray = (array) => array[Math.floor(Math.random() * array.length)];

	const handleGetImage = () => {
		setIsLoading((prevState) => {
			return !prevState;
		});
	};

	const handleChangeCheckBox = (event) => {
		const { checked, id } = event.target;
		setStateCheckBox({
			...stateCheckbox,
			[id]: checked,
		});
	};

	useEffect(() => {
		const FetchData = async () => {
			const result = await axios(getAllImages);
			const { data } = result.data;

			setImage(randomElementOfArray(data));
			setIsLoading(false);
		};

		if (isLoading) {
			FetchData();
		}
	}, [isLoading]);

	return (
		<Container className="text-center mt-5">
			<Row className="col">
				<Col>
					<OptionsForm
						image={image}
						loadImage={handleGetImage}
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
