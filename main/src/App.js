import "./App.css";
import { useState } from "react";
function App() {
  const [isVis,setVis] = useState(false);

  return (
    <div className="App">
      {/* Other components or JSX */} hi
      <button onClick={()=>{setVis((prev) => !prev)}}>
         {/* 4:19:39 */}
          
          {isVis ? "Hide" :"Show"}

      </button>
    {isVis && <h1>Hidden text</h1>}
    </div>
  );
}
export default App;
