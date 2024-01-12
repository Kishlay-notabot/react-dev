import "./App.css";
import { useHwk } from "./useHwk";
function App() {
  const [isVis,toggle] = useHwk()

  return (
    <div className="App">
      hi <br />
      <button onClick={toggle}>{isVis ? "Hide" :"Show"}</button>
    {isVis && <h1>Hidden text</h1>}
    </div>
  );
}
export default App;
