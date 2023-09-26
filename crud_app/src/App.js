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

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const blackDivStyle = {
    backgroundColor: 'black',
    width: 'calc(100% + 20px)', // Wider by 10px on each side
    height: '80px', // You can adjust the height as needed
    position: 'absolute',
    top: '50%', // Center it vertically
    left: '50%', // Center it horizontally
    transform: 'translate(-50%, -50%)', // Center it perfectly
    zIndex: -1, // Place it behind other content
  };

  
  const renderStartTime = performance.now();

  return (<div className="App">
  <div className='inputs'>
    <div style={containerStyle}>
      <div className='container'>
        <div className='morphism'>
          <input onChange={inpchg} value={newT} />
          <button onClick={addT}>Enter</button>
        </div>
      </div>
    </div>
  </div>
  <div className='list'>
    {crudTodo.map((props) => (
      <div key={props.id}>
        {props.taskName}
        <button onClick={() => delT(props.id)}>x</button>
      </div>
    ))}
  </div>
</div>);

// 2:02:28 20/9/2023

// crud module complete from video 21/9/2023

//26/9/2023 completed crud module ending started useEffect hook
const renderEndTime = performance.now();

const renderLag = renderEndTime - renderStartTime;
// 
console.log(`Render lag: ${renderLag}ms`);
console.log('hi');
}

export default App;
