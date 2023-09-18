import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [crudTodo, todoFunc] = useState([]);
  const [newT, setT] = useState("");

  const addT = () => {
    // newT trim function removes whitespaces and empty tasks
    if (newT.trim() === "") {
      return; // Don't add empty tasks
    }

    const task = {
      id: crudTodo.length === 0 ? 1 : crudTodo[crudTodo.length - 1].id + 1,
      taskName: newT,
    };

    // Update the state with the new task object
    todoFunc([...crudTodo, task]);
// edit done above, the variable was changed 1:55:58
    // Clear the input field
    setT("");
  }

  const inpchg = (event) => {
    setT(event.target.value);
  }

  const delT = (id) => {
    const newTodo = crudTodo.filter((task) => task.id !== id);
    todoFunc(newTodo);
  };

  return (
    <div className="App">
      <div className='inputs'>
      <div className='container'><div className='morphism'>
        <input onChange={inpchg} value={newT} />
        <button onClick={addT}>Enter</button>
        
      </div>
      </div>
      </div>
      <div className='list'>
        {crudTodo.map((task) => (
         <div key={task.id}>
            {task.taskName}
            <button onClick={() => delT(task.id)}>x</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
