import React from 'react';
import styles from './FirstContent.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from '../../../img/App.png';
import { Link } from 'react-router-dom';

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
            <Link to="/GetStarted">
              <button className={styles.btn}>
                <b>Get started!</b>
              </button>
            </Link>
          </div>
        </Col>
        <Col xs={12} lg={4} sm={6} className={styles.col}>
          <div>
            <img src={App} style={{ height: '650px' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstContent;
