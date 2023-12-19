import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }
  });

  return (
    <h2>HOPE
      <p> {data?.fact} </p>
    </h2>
  );
};
