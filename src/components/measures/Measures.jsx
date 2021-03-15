import { useEffect, useState } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import { ALL_IMAGES_DEV } from '../../common/constants';
import { getAllImages } from '../../common/routers';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Image } from './components/Image/Image';
import { OptionsForm } from './components/OptionsForm/OptionsForm';

export const Measures = () => {
	const [measures, setMeasures] = useState([]);
	const [image, setUrlImage] = useState(null);

	const RandomImageUrl = (arrayOfImages) => {
		const image = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
		setUrlImage(image);
	};
	console.log(image);

	useEffect(() => {
		const FetchData = async () => {
			const result = await axios(ALL_IMAGES_DEV);
			const { data } = result.data;

			setMeasures(data);
		};

		FetchData();
	}, []);

	return (
		<Container className="text-center mt-5">
			<Row className="col">
				<Col>
					{!isEmpty(measures) ? (
						<OptionsForm measures={measures} SendForm={RandomImageUrl} />
					) : (
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					)}
				</Col>
				<Col>{image && <Image {...image} />}</Col>
			</Row>
		</Container>
	);
};
