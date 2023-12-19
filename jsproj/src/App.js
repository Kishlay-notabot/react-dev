import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import Axios from 'axios';

const queryClient = new QueryClient();

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

const HomeWithQueryClient = () => (
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);

export default HomeWithQueryClient;
