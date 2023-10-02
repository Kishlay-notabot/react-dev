import logo from './logo.svg';
import './App.css';
import Axios from "axios"; 


function App() {
//   fetch("https://catfact.ninja/fact").then((res) => res.json())
// .then((data) => {
//   console.log(data)
// });

Axios.get("https://catfact.ninja/fact").then((res)=> {
  console.log(res.data);
});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <br /> Hello

      <br /><button> catfact
        fetchapi
      </button>
      <p> </p>
      </header>
    </div>
  );
}

export default App;
