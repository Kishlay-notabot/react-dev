import logo from './logo.svg';
import './App.css';
import Axios from "axios"; 
import { useEffect, useState } from 'react';


function App() {
  const [name,setName] = useState("")
  const fetchD= () => {
    Axios.get("https://api.agify.io/?name=")

  }
  <div className='App'>
    <button>Predict_age</button>
    <input placeholder='write ur name' onChange={(event) =>{setName(event.target.value)}}/>
    <h1> Predicted_age= </h1>
  </div>
}

export default App;
