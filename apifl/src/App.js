import { Home } from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return(
  <div className='App'> 

  <Router>
    <Routes> <Route path='/' element={<Home />}/> </Routes>
  </Router>
  </div>
  )
}

export default App;
// module 7 complete 
