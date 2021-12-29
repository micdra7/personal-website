import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { initTranslations } from './i18next';

initTranslations();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
