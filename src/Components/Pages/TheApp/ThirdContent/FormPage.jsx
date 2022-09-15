import React from 'react';
import styles from './FormPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import happyIMG from '../../../img/happiness.png';
import Form from './Form/Form';

function FormPage() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6} className={styles.col}>
          <div className={styles.header}>
            <div className={styles.marker}></div>
            <h1 style={{ fontSize: 50 }}>Be our first user!</h1>
          </div>
          <p style={{ fontSize: 18, marginBottom: 0 }}>
            {' '}
            Fill in the inquiry Form <span style={{ color: '#ffcc00' }}>&</span> we will get back to
            you!{' '}
          </p>
          <Form />
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <div className={styles.imgContainer}>
            <img src={happyIMG} className={styles.img} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FormPage;
