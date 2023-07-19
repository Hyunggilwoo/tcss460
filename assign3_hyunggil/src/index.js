import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const persons = [
  {
    id: 1,
    name: 'Hyunggil Woo',
    weight: 150,
    important: true
  },
  {
    id: 2,
    name: 'Orie Abe',
    important: false
  },
  {
    id: 3,
    name: 'Issac Granstrom',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

