import logo from './logo.svg';
import './App.css';
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function App() {
  console.log('hi')
  console.log('imported')
  const Task = () => {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["cat"],
      queryFn: () => {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
       
      },
      //...
    });
    if (isError) {
      return <h1>error lol</h1>
    }
  if (isLoading) {
    return <h2>Loading...</h2>
  }
    return (
      <h1>
        HOPE
        <p>{data?.fact} HI</p>
      </h1>
    );
  };

  return (
    <div>
      {/* Other components or JSX */}
      <Task />
    </div>
  );
}

export default App;
