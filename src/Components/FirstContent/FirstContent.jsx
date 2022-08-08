import React from 'react';
import styles from './FirstContent.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Madrid from '../img/Madrid.jpg';
import Barcelona from '../img/Barcelona.jpg';
import Valencia from '../img/Valencia.png';

function FirstContent() {
  return (
    <Container fluid style={{ marginTop: '130px' }}>
      <Row className={styles.row}>
        <Col xs={12} lg={7} sm={6} className={styles.col}>
          <div className={styles.textContainer}>
            <h1>
              Ready to <span className={styles.textEmphasis}>free up</span> your time?
            </h1>
            <ul className={styles.list}>
              <li>
                AI-Based tool that solves your routine household tasks with premium care in 2
                clicks.
              </li>
              <li>No more exhausting daily routine!!!</li>
              <li>Outsource to professional all household duties!</li>
              <li>
                Spend time with pleasure and make{' '}
                <mark style={{ backgroundColor: '#ffcc00' }}>your life easier!</mark>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} lg={4} sm={6} className={styles.col}>
          <div>
            <img
              src="https://img.moyo.ua/img/gallery/4978/93/1234982_middle.jpg?1629268509"
              style={{ height: '650px' }}
            />
          </div>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col xs={12} className={styles.col}>
          <div className={styles.location}>
            <h1 style={{ lineHeight: 1, fontSize: 50 }}>Our locations</h1>
            <div
              className={styles.marker}
              style={{ height: '30px', width: '179px', marginLeft: '-7px' }}></div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={3} className={styles.col}>
          <img src={Madrid} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Madrid</h4>
        </Col>
        <Col xs={12} sm={3} className={styles.col}>
          <img src={Barcelona} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Barcelona</h4>
        </Col>
        <Col xs={12} sm={3} className={styles.col}>
          <img src={Valencia} className={styles.images} />
          <h4 style={{ lineHeight: 2 }}>Valencia</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstContent;
