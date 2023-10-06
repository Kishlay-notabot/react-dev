import './App.css';
import Axios from "axios"; 
import { useEffect, useState } from 'react';


function App() {
  console.log('rendered')
  const [name,setName] = useState("")
  const fetchD= () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {console.log(res.data)});
// 2:47:39
  }
  return(
  <div className='App'>
    <input placeholder='write ur name' onChange={(event) =>{setName(event.target.value)}}/>
    <button onClick={fetchD}>Predict_age</button>
    <h1> Predicted_age= </h1>
  </div>
  )
}

export default App;
