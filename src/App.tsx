// App.tsx
import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { Header } from './Header';

const App: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>
      <Header />
      {isAuthenticated && (
        <h1>App.tsx</h1>
      )}
    </>
  );
};

export { App };
