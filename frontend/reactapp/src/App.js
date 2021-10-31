import NavBar from './common/Header/index';
import Footer from './common/Footer/index'
import Routes from './routes/index'
import Breadcrumb from './common/Breadcrumb/index'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Breadcrumb />
        <Routes />
        <Footer />
      </Router >
    </div >
  );
}

export default App;
