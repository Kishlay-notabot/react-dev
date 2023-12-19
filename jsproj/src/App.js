import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "axios";
const queryClient = new QueryClient();

export const Home = () => {
  const { data } = useQuery({
    queryKey: "cat",
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

export default App;
