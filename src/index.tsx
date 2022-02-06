import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { initTranslations } from './i18n';

initTranslations();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
