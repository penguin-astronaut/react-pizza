import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: 'https://a435728da5c04b2cb53bdb0081019c6d@o1130016.ingest.sentry.io/6173950',
  integrations: [new Integrations.BrowserTracing()],
  release: process.env.REACT_APP_SENTRY_RELEASE,
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
