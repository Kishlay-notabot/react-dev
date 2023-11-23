import { Home } from './pages/Home';
import { Profile } from './pages/contact';
import { About } from './pages/about';
import { Nav } from './pages/navbar';

import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [username, setUsern] = useState("KishlUser");
  return(
  <div className='App'> 

  <Router>
    <Nav />
    <Routes> 
    <Route path='/home' element={<Home  username={username}/>}/>
    <Route path='/pf' element={<Profile username={username}/>}/>
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
// module 8 complete basic rrd 