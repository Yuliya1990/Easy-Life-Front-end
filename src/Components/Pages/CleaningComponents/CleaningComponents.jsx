import Navibar from '../../Navibar/Navibar';
import React from 'react';
import styles from './CleaningComponents.module.css';
import { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../../api/index';
import { useParams } from 'react-router-dom';
import {
  Button,
  ToggleButton,
  ButtonGroup,
  Container,
  Row,
  Col,
  ToggleButtonGroup,
} from 'react-bootstrap';

export default function CleaningComponents() {
  const [components, setComponents] = useState([]);
  const [allComponents, setAllComponents] = useState([]);
  const { cleaningTypeid } = useParams();

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.cleaningComponents + '/' + cleaningTypeid)
      .fetch()
      .then((response) => {
        setComponents(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    createAPIEndpoint(ENDPOINTS.cleaningComponents)
      .fetch()
      .then((response) => {
        setAllComponents(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function isActive(component) {
    if (components.find((element) => element.name === component.name)) return true;
    else return false;
  }

  return (
    <>
      <Navibar />
      <Container>
        <Row>
          <h2 style={{ marginTop: '120px', marginBottom: '30px' }}>
            What is included in the cleaning:
          </h2>
        </Row>

        <ToggleButtonGroup type="checkbox">
          <Row>
            {allComponents.map((component, index) => {
              return (
                <>
                  <Col xs={12} sm={6} lg={4} xl={3}>
                    <ToggleButton
                      className={styles.btn}
                      variant="outline-warning"
                      id={index}
                      key={index}
                      value={index}
                      checked={isActive(component)}>
                      <h5>{component.name}</h5>
                    </ToggleButton>
                  </Col>
                </>
              );
            })}
          </Row>
        </ToggleButtonGroup>
      </Container>
    </>
  );
}
