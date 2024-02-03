import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './AuthConfig';

const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize();

const rootNode = document.getElementById('root');
if (rootNode) {
  createRoot(rootNode)
    .render(
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    );
}
