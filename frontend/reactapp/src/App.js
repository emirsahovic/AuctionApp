import NavBar from './common/Header/index';
import Footer from './common/Footer/index'
import Routes from './routes/index'
import Breadcrumb from './common/Breadcrumb/index';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import './App.css';

function App() {
  const [loggedInState, setLoggedInState] = useState(null);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const showMessage = (type, message) => {
    setMessage(message);
    setType(type);
    setAlertVisibility(true);
    setTimeout(() => {
      setAlertVisibility(false)
    }, 4000);
  }

  const changeLoggedInState = () => {
    if (loggedInState === null) {
      setLoggedInState(false);
      return;
    }
    setLoggedInState(!loggedInState);
  }

  return (
    <div>
      <Router>
        <NavBar loggedInState={loggedInState} />
        <Breadcrumb />
        <div className="alert-container">
          <Alert show={alertVisibility} variant={type}>{message}</Alert>
        </div>
        <Routes changeLoggedInState={changeLoggedInState} showMessage={showMessage} />
        <Footer />
      </Router >
    </div >
  );
}

export default App;
