import React from 'react';
import styles from './FirstContent.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FirstContent() {
  return (
    <Container fluid style={{ marginTop: '100px' }}>
      <Row className={styles.row}>
        <Col xs={12} lg={7} sm={6} className={styles.col}>
          <div className={styles.text}>
            <h1>
              Ready to <span className={styles.textEmphasis}>free up</span> your time?
            </h1>
            <p>Some text</p>
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
      <Row className={styles.row} style={{ background: '#fffae6' }}>
        <p style={{ height: '500px' }}></p>
      </Row>
    </Container>
  );
}

export default FirstContent;
