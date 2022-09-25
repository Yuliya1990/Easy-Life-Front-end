import Navibar from '../../Navibar/Navibar';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import styles from './GetStarted.module.css';

export default function GetStarted() {
  return (
    <>
      <Navibar />
      <Container
        style={{
          marginTop: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className={styles.TabContainer}>
          <Tabs defaultActiveKey="signUp" className="mb-3" fill>
            <Tab eventKey="signUp" title="Sign Up">
              <SignUp />
            </Tab>
            <Tab eventKey="logIn" title="Log In">
              <LogIn />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}
