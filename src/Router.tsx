import AuthorizedLayout from 'Layouts/AuthorizedLayout';
import { lazy, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

const Landing = lazy(() => import('pages/Landing'));

function Routes() {
  let element = useRoutes([
    {
      element: <AuthorizedLayout />,
      children: [{ path: '/', element: <Landing /> }],
    },
  ]);
  return element;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...</>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}
