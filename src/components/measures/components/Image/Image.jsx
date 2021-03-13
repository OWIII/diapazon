import { Row, Col } from 'react-bootstrap';
import { API } from '../../../../common/constants';

export const Image = ({ img, alt }) => (
  <Row className="mt-5">
    <Col>
      <img className="image" src={`${API}${img}`} alt={alt} />
    </Col>
  </Row>
);