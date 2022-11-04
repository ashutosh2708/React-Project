import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HouseContextProvider from './components/HouseContext';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ppvhacub348tje7g.us.auth0.com"
    clientId="YV3p9nkjodkJqFFsjPYMPZtWFkIB3z49"
    redirectUri={window.location.origin}
  >
    <HouseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HouseContextProvider>
    </Auth0Provider>
);
