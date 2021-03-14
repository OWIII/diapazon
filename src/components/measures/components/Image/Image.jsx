import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { API } from '../../../../common/constants';
import { ImageViewer } from './ImageViewer';

export const Image = ({ img, alt }) => {
  const [viewerIsOpen, setState] = useState(false);

  const handleSwitchStateViewer = () => {
    setState(prevState => {
      return !prevState
    });
  };

  return (
    <Row className="mt-5">
      <Col>
        <img
          className="image"
          src={`${API}${img}`}
          alt={alt}
          onClick={handleSwitchStateViewer}
          />
        <ImageViewer
          isOpen={viewerIsOpen}
          seState={handleSwitchStateViewer}
          img={img}
          alt={alt}
          api={API}
        />
      </Col>
    </Row>
  );
}