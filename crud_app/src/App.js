import { useState } from 'react';
import './App.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  const[newT, setT] = useState("");
  const addT = () =>{
    const task = {
      id: crudTodo.length === 0? 1: crudTodo[crudTodo.length-1].id+1,
      taskName: newT,
    }
  // const newL = [...crudTodo, newT] this was the original ver. watch before 1:45:00
  todoFunc([...crudTodo, newT]);
  }
  const inpchg = (event)=>{
    setT(event.target.value);
  }
  const delT = (taskName) =>{
    const newTodo = crudTodo.filter((task) =>{
    if (task ===taskName){
      return false;}
      else{
        return true;}
  });
  todoFunc(newTodo);};

  return (
    <div className="App">
      <div className='inputs'><input onChange={inpchg} /> 
      <button onClick={addT}>enter</button>
      </div>
      <div className='list'>
        {/* {newT} to show task realtime while typing */}
        {crudTodo.map((task)=> {
          return <div>{task}<button onClick={()=> delT(task)}>X</button></div> 
          // using an inline func above
        })
        }
      </div>
     </div>
  );
}

export default App;
