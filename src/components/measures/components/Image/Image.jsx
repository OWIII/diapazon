import { Row, Col } from 'react-bootstrap';

export const Image = ({ src, alt }) => (
  <Row className="mt-5">
    <Col>
      <img className="image" src={src} alt={alt} />
    </Col>
  </Row>
);