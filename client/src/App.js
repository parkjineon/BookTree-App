import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import LandingPage from './components/Views/LandingPage/LandingPage';
import LoginPage from './components/Views/LoginPage/LoginPage';
import RegisterPage from './components/Views/RegisterPage/RegisterPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul id="navUL">
            <li>
              <Link className="navLi" to='/'>Home</Link>
            </li>
            <li>
              <Link className="navLi" to='/login'>Login</Link>
            </li>
            <li>
              <Link className="navLi" to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </Router>
  );
}
