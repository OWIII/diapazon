import { Container, Row, Col } from "react-bootstrap";

export const Contacts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contacts">
            <div className="contacts__title">По вопросам и предложениям:</div>
            <span className="contacts__email">owiii.dev@gmail.com</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}