import { useState } from 'react';
import './App.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  return (
    <div className="App">
      <div className='inputs'><input /> 
      <button>enter</button>
      </div>
      <div className='list'></div>
     </div>
  );
}

export default App;
