import { React, useState } from 'react';
import styles from './Form.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function FormControl() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('I want to be a client');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (form.checkValidity() === true) {
      console.log(firstName, lastName, email, role);
      setLoading(true);
      //Sending data to the backend
      await axios
        .post('http://localhost:3002/send', {
          firstName,
          lastName,
          email,
          role,
        })
        .then(
          (response) => {
            alert('Message sent succesful!');
          },
          (error) => {
            alert(error);
          },
        );
      setLoading(false);
    }
    setValidated(true);
  };

  return (
    <div className={styles.formContainer}>
      <Form className={styles.form} noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="FirstName">
          <Form.Label column sm={3} lg={4}>
            <strong>First Name</strong>
          </Form.Label>
          <Col sm={9} lg={8}>
            <Form.Control
              required
              type="text"
              id="firstName"
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please write a First Name.</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="LastName">
          <Form.Label column sm={3} lg={4}>
            <strong>Last Name</strong>
          </Form.Label>
          <Col sm={9} lg={8}>
            <Form.Control
              required
              type="text"
              id="lastName"
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please write a Last Name.</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm={3} lg={4}>
            <strong>Email address</strong>
          </Form.Label>
          <Col sm={9} lg={8}>
            <Form.Control
              required
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Please write an email.</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" id="role" onChange={(e) => setRole(e.target.value)}>
          <Form.Select>
            <option>I want to be a client</option>
            <option>I want to find a work</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Row} className="mb-1">
          <Col xs={12} className={styles.col}>
            <Button className={styles.buttonSubmit} type="submit" variant="dark" disabled={loading}>
              <b>{loading ? 'Sending...' : 'Submit'}</b>
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormControl;
