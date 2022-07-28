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
      style={{ height: 90, backgroundColor: '#ffcc00' }}>
      <Container>
        <Navbar.Brand href="#home">{<Logo />}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
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
