import NavBar from './Common/Header/NavBar';
import Footer from './Common/Footer/Footer'
import Routes from './Routes/Routes'
import Breadcrumb from './Common/Breadcrumb/Breadcrumb'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Breadcrumb />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
