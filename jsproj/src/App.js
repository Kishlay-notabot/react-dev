import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const CatFact = () => {
  const { data } = useQuery('catFact', () =>
    fetch('https://catfact.ninja/fact').then((res) => res.json())
  );

  return (
    <div>
      <h2>Cat Fact</h2>
      <p>{data?.fact}</p>
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
