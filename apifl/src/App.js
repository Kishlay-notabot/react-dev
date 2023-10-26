import { Home } from './pages/Home';
import { Contact } from './pages/contact';
import { About } from './pages/about';

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
function App() {
  return(
  <div className='App'> 

  <Router>
    <div>navbar
    <Link to="/home"> home </Link> 
    <Link to="/ab"> about </Link> 
    <Link to="/ct"> contact </Link> </div>
    <Routes> 
    <Route path='/home' element={<Home />}/>
    <Route path='/ct' element={<Contact />}/>
    <Route path='/ab' element={<About />}/> 
    <Route path='*' element={<h4>ERROR 404</h4>} />
    
    </Routes>
  </Router>
  </div>
  )
}

export default App;
// module 7 complete 
// bug fixed because of react-router-dom installed in wrong folder
// REACTAPPS ARE NOT GLOBAL 
// localhost:3000/home 
//react routes are like web pages

// * is the 404 page 
