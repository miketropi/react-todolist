import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppTodoProvider} from './lib/context';

ReactDOM.render(
  <React.StrictMode>
    <AppTodoProvider>
      <App />
    </AppTodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);