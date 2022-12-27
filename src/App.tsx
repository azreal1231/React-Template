import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PrivateRoutes from './utils/PrivateRoutes'
import LoginPage from './pages/auth/login';
import HomePage from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<HomePage/>} path="home" />
            </Route>
            <Route element={<LoginPage />} path="/"/>
            <Route element={<LoginPage />} path="/login"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
