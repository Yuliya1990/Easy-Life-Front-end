import React from 'react';
import styles from './CleaningTypes.module.css';
import Navibar from '../../Navibar/Navibar';
import { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../../api/index';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CleaningTypes() {
  const [cleaningTypes, setCleaningTypes] = useState([]);
  const [clicked, setClicked] = useState();

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.cleaningTypes)
      .fetch()
      .then((response) => {
        setCleaningTypes(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (value) => {
    console.log(value);
    setClicked(value);
  };

  return (
    <>
      <Navibar />
      <Container fluid style={{ marginTop: '160px' }}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className={styles.Container}>
              <div>
                <div className={styles.marked}></div>
                <h1 style={{ marginBottom: '40px' }}>Choose the cleaning type: </h1>
              </div>

              {cleaningTypes
                .map((cleaningType) => {
                  return (
                    <>
                      <Button
                        as={Link}
                        to={`/components/${cleaningType.cleaningid}`}
                        className={styles.Button}
                        variant="dark"
                        key={cleaningType.id}
                        onClick={() => {
                          handleClick(cleaningType.cleaningid);
                        }}>
                        <h4>{cleaningType.name}</h4>
                      </Button>
                    </>
                  );
                })
                .reverse()}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
