import { useState } from 'react';
import './App.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  const[newT, setT] = useState("");
  const inpchg = (event)=>{
    setT(event.target.value);
  
  }
  return (
    <div className="App">
      <div className='inputs'><input onChange={inpchg} /> 
      <button>enter</button>
      </div>
      <div className='list'>
        {/* {newT} to show task realtime while typing */}
      </div>
     </div>
  );
}

export default App;
