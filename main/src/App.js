import "./App.css";
import { useState } from "react";
function App() {
  const [isVis,setVis] = useState(false);

  return (
    <div className="App">
      {/* Other components or JSX */} hi
      <button onClick={()=>{setVis((prev) => !prev)}}>
          
          {isVis ? "Hide" :"Show"}

      </button>
    {isVis && <h1>Hiddentex</h1>}
    </div>
  );
}
export default App;
