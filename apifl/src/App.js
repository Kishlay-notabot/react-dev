import './App.css';
import Axios from "axios"; 
import { useEffect, useState } from 'react';


function App() {
  console.log('rendered')
  const [predAge, setpredAge] = useState(null);
  const [name,setName] = useState("")
  const fetchD= () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => 
    {setpredAge(res.data)});
// 2:47:39
  }
  return(
  <div className='App'>
    <input placeholder='write ur name' onChange={(event) =>{setName(event.target.value)}}/>
    <button onClick={fetchD}>Predict_age</button>
    <h1>name= {predAge?.name}</h1>
    <h1> Predicted_age= {predAge?.age}</h1>
    <h1> count= {predAge?.count}</h1>

  </div>
  )
}

export default App;
