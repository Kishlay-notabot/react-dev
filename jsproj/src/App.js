import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Axios from 'axios';

const queryClient = new QueryClient();

const CatFact = () => {
  const { data } = useQuery('catFact', async () => {
    const response = await Axios.get('https://catfact.ninja/fact');
    return response.data;
  });

  return (
    <div>
      <h2>Cat Fact</h2>
      {data ? <p>{data.fact}</p> : <p>Loading...</p>}
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CatFact />
    </QueryClientProvider>
  );
}
