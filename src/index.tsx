/*
 * @Author: ailoman
 * @Date: 2023-03-21 10:04:23
 * @LastEditTime: 2023-03-21 14:49:22
 * @LastEditors: ailoman
 * @FilePath: /react-cli-temp/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/features';

import reportWebVitals from './reportWebVitals';


import './reset.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
