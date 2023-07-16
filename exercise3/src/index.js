import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'



const countries = [
  {
    id: 1,
    common: 'Switzerland',
    capital: 'Bern',
    area: 41284,
    languages: 'French'
  },
  {
    id: 2,
    common: 'South Korea',
    capital: 'Seoul',
    area: 100363,
    languages: 'Korean'
  },
  {
    id: 3,
    common: 'Japan',
    capital: 'Tokyo',
    area: 377975,
    languages: 'Japanese'
  }

]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App countries={countries}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

