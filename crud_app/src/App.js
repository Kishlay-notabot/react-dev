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
<<<<<<< HEAD
  const delT = (id) =>{
    const newTodo = crudTodo.filter((task) => task.id!== id);
=======
  const delT = (taskName) =>{
    const newTodo = crudTodo.filter((task) =>{
    if (task ===taskName){
      return false;}
      else{
        return true;}
  });
>>>>>>> parent of 86804f5 (crud optimised and completed)
  todoFunc(newTodo);};

  return (
    <div className="App">
      <div className='inputs'><input onChange={inpchg} /> 
      <button onClick={addT}>enter</button>
      </div>
      <div className='list'>
        {/* {newT} to show task realtime while typing */}
        {crudTodo.map((task)=> {
<<<<<<< HEAD
          return <div>{task.taskName}<button onClick={()=> delT(task.id)}>x</button></div> 
=======
          return <div>{task}<button onClick={()=> delT(task)}>X</button></div> 
>>>>>>> parent of 86804f5 (crud optimised and completed)
          // using an inline func above
        })
        }
      </div>
     </div>
  );
}

export default App;
