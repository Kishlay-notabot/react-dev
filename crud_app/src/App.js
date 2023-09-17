import { useState } from 'react';
import './App.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  const [newT, setT] = useState("");

  const addT = () => {
    if (newT.trim() === "") {
      return; // Don't add empty tasks
    }

    const task = {
      id: crudTodo.length === 0 ? 1 : crudTodo[crudTodo.length - 1].id + 1,
      taskName: newT,
    };

    // Update the state with the new task object
    todoFunc([...crudTodo, task]);

    // Clear the input field
    setT("");
  }

  const inpchg = (event) => {
    setT(event.target.value);
  }

  const delT = (id) => { // Change function parameter
    const newTodo = crudTodo.filter((task) => task.id !== id);

    // Update the state with the filtered array
    todoFunc(newTodo);
  };

  return (
    <div className="App">
      <div className='inputs'>
        <input onChange={inpchg} /> 
        <button onClick={addT}>enter</button>
      </div>
      <div className='list'>
        {crudTodo.map((task) => {
          return (
            <div key={task.id}>
              {task.taskName}
              <button onClick={() => delT(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
