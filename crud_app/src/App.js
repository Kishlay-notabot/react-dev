import { useState } from 'react';
import './App.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  const[newT, setT] = useState("");
  const addT = () =>{
  // const newL = [...crudTodo, newT] this was the original ver. watch before 1:45:00
  todoFunc([...crudTodo, newT]);
  }
  const inpchg = (event)=>{
    setT(event.target.value);
  }
  const delT = (taskName) =>{
    const newTodo = crudTodo.filter((task) => task!== taskName);
  todoFunc(newTodo);};
  // the mistake was in the line above 

  return (
    <div className="App">
      <div className='inputs'><input onChange={inpchg} /> 
      <button onClick={addT}>enter</button>
      </div>
      <div className='list'>
        {/* {newT} to show task realtime while typing */}
        {crudTodo.map((task)=> {
          return <div>{task}<button onClick={()=> delT(task)}>x</button></div> 
          // using an inline func above
        })
        }
      </div>
     </div>
  );
}

export default App;
