import NavBar from './Common/Header/NavBar';
import Footer from './Common/Footer/Footer'
import Routes from './Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
       <NavBar />
       <Routes />
       <Footer />
    </Router>
    </div>
  );
}

export default App;
