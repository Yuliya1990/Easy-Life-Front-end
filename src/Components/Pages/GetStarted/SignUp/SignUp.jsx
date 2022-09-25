import { Container } from 'react-bootstrap';
import { React, useState } from 'react';
import stylesForm from '../../TheApp/ThirdContent/Form/Form.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUp() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else if (form.checkValidity() === true) {
      //some actions
    }
    setValidated(true);
  };

  return (
    <>
      <Container fluid>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Sign Up</h1>
        </div>
        <Row className="justify-content-md-center">
          <Col md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className={stylesForm.formContainer} style={{ width: '100%' }}>
              <Form
                className={stylesForm.form}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
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
                    <Form.Control.Feedback type="invalid">
                      Please write a First Name.
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      Please write a Last Name.
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      Please write an email.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                  <Form.Label column sm={3} lg={4}>
                    <strong>Password</strong>
                  </Form.Label>
                  <Col sm={9} lg={8}>
                    <Form.Control
                      required
                      type="text"
                      id="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please write a password.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-1">
                  <Col xs={12} className={stylesForm.col}>
                    <Button className={stylesForm.buttonSubmit} type="submit" variant="dark">
                      <b>Submit</b>
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
