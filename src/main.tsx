import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import Router from 'Router';
import ThemeProvider from 'ThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const e = error as Error;
      console.error(e.message);
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
