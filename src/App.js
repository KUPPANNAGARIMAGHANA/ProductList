import FrontPage from './FrontPage';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ProductPage from './ProductPage';
function App() {
  return(
    <>
      <h1 className='welcome'> E-COMMERCE </h1>
      <Router>
        <Routes>
          <Route path = "/" element = {<FrontPage/>}/>
          <Route path = "/productPage" element = {<ProductPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
