import Navibar from '../../Navibar/Navibar';
import React from 'react';
import { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../../../api/index';
import { useParams } from 'react-router-dom';

export default function CleaningComponents() {
  const [components, setComponents] = useState();
  const { cleaningTypeid } = useParams();
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.cleaningComponents + '/' + cleaningTypeid)
      .fetch()
      .then((response) => {
        setComponents(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navibar />
      <h1 style={{ marginTop: '100px' }}>{cleaningTypeid}</h1>;
    </>
  );
}
