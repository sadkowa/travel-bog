import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ResetStyle from './components/global/Reset';
import GlobalStyle from './components/global/Global';

import { PrismicProvider } from '@prismicio/react';
import { client } from './providers/prismic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
