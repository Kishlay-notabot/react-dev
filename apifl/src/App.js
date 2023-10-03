import logo from './logo.svg';
import './App.css';
import Axios from "axios"; 
import { useState } from 'react';


function App() {
//   fetch("https://catfact.ninja/fact").then((res) => res.json())
// .then((data) => {
//   console.log(data)
// });
const[catFact, setCatfact] = useState("");

Axios.get("https://catfact.ninja/fact").then((res)=> {
  setCatfact(res.data.fact);
   //the .fact is included as it is an object as a whole with a fact property in it 
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <br /> Hello

      <br /><button> catfact
        fetchapi
      </button>
      <p>{catFact}</p>
      </header>
    </div>
  );
}

export default App;
