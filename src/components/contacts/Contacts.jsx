import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

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
