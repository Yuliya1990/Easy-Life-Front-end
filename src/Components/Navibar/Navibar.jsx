import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo.jsx';
import styles from './Navibar.module.css';
function Navibar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      fixed="top"
      style={{ backgroundColor: '#ffcc00', boxShadow: '0px 0.2px 10px #888888' }}>
      <Container>
        <Navbar.Brand href="#home">{<Logo />}</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            borderWidth: '2px',
            borderRadius: '100px',
            height: '50px',
          }}></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={styles.nav}>The App</Nav.Link>
            <Nav.Link className={styles.nav}>About Us</Nav.Link>
            <Nav.Link className={styles.nav}>Work with us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
