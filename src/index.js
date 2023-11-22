import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { storeConfiguration } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storeConfiguration}>
    <App />
  </Provider>
);
