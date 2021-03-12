import { useEffect, useState } from 'react';
import axios from 'axios';

import { ALL_IMAGES } from '../../common/constants';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Image } from './components/Image/Image'

export const Measures = () => {
  const [measures, setMeasures] = useState([]);
  const [urlImage, setUrlImage] = useState(null);

  const RandomImageUrl = (arrayOfImages) => {
    const url = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)].img;
    setUrlImage(url);
  };

  useEffect(() => {
    const FetchData = async () => {
      const result = await axios(ALL_IMAGES);
      const { data } = result.data;

      setMeasures(data);
    };

    FetchData();
  }, []);

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <Button variant="primary" size="lg" onClick={() => RandomImageUrl(measures)}>
            Сгенерировать измеритель
          </Button>
        </Col>
      </Row>
      { urlImage && <Image
        src={`https://api.slav-nayka.ru/${urlImage}`}
        alt={"Alt"}
      />
      }
    </Container>
  )
}