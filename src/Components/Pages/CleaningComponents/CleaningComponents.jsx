import Navibar from '../../Navibar/Navibar';
import React from 'react';
import styles from './CleaningComponents.module.css';
import { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../../api/index';
import { useParams } from 'react-router-dom';
import { Button, ToggleButton, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

export default function CleaningComponents() {
  const [components, setComponents] = useState([]);
  const [allComponents, setAllComponents] = useState([]);
  const { cleaningTypeid } = useParams();
  const [checkedState, setCheckedState] = useState(new Array(100).fill(false));

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

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
  };

  function isChecked(component, index) {
    if (components.find((element) => element.name === component.name)) return true;
    else return checkedState[index];
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
        <Row>
          {allComponents.map((component, index) => {
            return (
              <>
                <Col xs={12} sm={6} lg={4} xl={3}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={component.name}
                    value={component.name}
                    checked={isChecked(component, index)}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{component.name}</label>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
