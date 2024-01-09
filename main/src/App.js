import logo from './logo.svg';
import './App.css';
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function App() {
  console.log('hi')
  console.log('imported')
  
  const { data: catD, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
    //...
  });

  const Task = () => {
    if (isError) {
      return <h1>error lol</h1>
    }
    if (isLoading) {
      return <h2>Loading...</h2>
    }
    return (
      <h1>
        Hi there
        <p>{catD?.fact}!</p>
        <p>  <img src={logo} className='App-logo' alt='logo' /></p>
      </h1>
    );
  };

  return (
    <div>
      {/* Other components or JSX */}
      <Task />
      <button onClick={refetch}>fetch new</button>
    </div>
  );
}
// react query module complete 
export default App;
