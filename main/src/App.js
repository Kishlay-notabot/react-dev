import logo from './logo.svg';
import './App.css';
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function App() {
  const Task = () => {
    const { data } = useQuery({
      queryKey: ["cat"],
      queryFn: () => {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
      },
      //...
    });
  
    return (
      <h1>
        HOPE
        <p>{data?.fact}</p>
      </h1>
    );
  };
}

export default App;
