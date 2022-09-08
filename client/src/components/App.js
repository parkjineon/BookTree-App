import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Views/Nav/Nav"
import './App.css';

import LandingPage from './Views/LandingPage/LandingPage';
import LoginPage from './Views/LoginPage/LoginPage';
import RegisterPage from './Views/RegisterPage/RegisterPage';

export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </Router>
  );
}
