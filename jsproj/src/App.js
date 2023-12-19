import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const CatFact = () => {
  const { data, status } = useQuery('catFact', () =>
    fetch('https://catfact.ninja/fact').then((res) => res.json())
  );

  return (
    <div>
      <h2>Cat Fact</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error fetching cat fact</p>}
      {status === 'success' && <p>{data.fact}</p>}
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
