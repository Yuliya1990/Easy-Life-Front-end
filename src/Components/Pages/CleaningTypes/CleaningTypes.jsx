import React from 'react';
import styles from './CleaningTypes.module.css';
import Navibar from '../../Navibar/Navibar';
import { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../../api/index';
import { Container } from 'react-bootstrap';

export default function CleaningTypes() {
  const [cleaningTypes, setCleaningTypes] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.cleaningTypes)
      .fetch()
      .then((response) => {
        setCleaningTypes(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navibar />
      <Container fluid style={{ marginTop: '130px' }}>
        <p>Cleaning types: </p>
        <div className={styles.CleaningTypesContainer}></div>
        <div>
          {cleaningTypes.map((cleaningType) => {
            return (
              <div className={styles.cleaningTypeCard} key={cleaningType.id}>
                <h2>{cleaningType.name}</h2>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
