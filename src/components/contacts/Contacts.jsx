import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { NavBarComponent } from '../navbar';

import { signOut } from '../../store/actions';

const Contacts = ({ signOutAction }) => {
	return (
		<>
			<NavBarComponent signOut={signOutAction} showMenu={true} />
			<Container>
				<Row>
					<Col>
						<Alert variant="info" className="mt-5">
							<b>По вопросам и предложениям:</b> diapazone.app@gmail.com
						</Alert>
					</Col>
				</Row>
			</Container>
		</>
	);
};

Contacts.propTypes = {
	signOut: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
	signOutAction: (payload) => dispatch(signOut(payload)),
});

export default connect(null, mapDispatchToProps)(Contacts);
