import { Container, Row, Col, Alert } from 'react-bootstrap';

export const Contacts = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Alert variant="info" className="mt-5">
						<b>По вопросам и предложениям:</b> diapazone.app@gmail.com
					</Alert>
				</Col>
			</Row>
		</Container>
	);
};
