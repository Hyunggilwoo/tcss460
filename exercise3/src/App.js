import { useState, useEffect } from 'react'
import Home from './components/Home'
import Map from './components/Map'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import './styles/globals.css'

function App() {


  return (
    <div>
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Country</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Map</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Map</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/map/:lat/:lng" element={<Map />} />
          </Routes>

        </div>

      </Router>

    </div>
  );
}

export default App;
