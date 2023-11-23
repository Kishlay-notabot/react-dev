import { Home } from './pages/Home';
import { Profile } from './pages/contact';
import { About } from './pages/about';
import { Nav } from './pages/navbar';

import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState, useContext, createContext } from 'react';





export const  AppContext = createContext();
function App() {
  const [username, setUsern] = useState("KishlUser");
  return(
  <div className='App'> 
  <AppContext.Provider value={{username, setUsern}}>
  <Router>
    <Nav />
    <Routes> 
    <Route path='/home' element={<Home />}/>
    <Route path='/pf' element={<Profile />}/>
    <Route path='/ab' element={<About />}/> 
    <Route path='*' element={<h4>ERROR 404</h4>} />
    
    </Routes>
  </Router>
  </AppContext.Provider>
  </div>
  )
}

export default App;
// module 7 complete 
// bug fixed because of react-router-dom installed in wrong folder
// REACTAPPS ARE NOT GLOBAL 
// localhost:3000/home 
//react routes are like web pages
// for git add-a command, in unix terminal, type i, then commit msg, then esc, then :wq then enter
// * is the 404 page 
// module 8 complete basic rrd 