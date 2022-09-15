import React from 'react';
import styles from './SecondContent.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Madrid from '../../../img/Madrid.jpg';
import Barcelona from '../../../img/Barcelona.png';
import Valencia from '../../../img/Valencia.png';

function SecondContent() {
  return (
    <Container fluid style={{ backgroundColor: '#ffcc00' }}>
      <Row>
        <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.location}>
            <h1 style={{ lineHeight: 1, fontSize: 50, zIndex: 2 }}>Our locations</h1>
            <div
              className={styles.marker}
              style={{ height: '30px', width: '220px', marginLeft: '-33px' }}></div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ paddingBottom: '70px' }}>
        <Col
          xs={12}
          md={6}
          lg={3}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Madrid} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Madrid</h4>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Barcelona} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Barcelona</h4>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={3}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={Valencia} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Valencia</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default SecondContent;
