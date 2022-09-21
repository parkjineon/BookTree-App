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
import BookPage from "./Views/BookPage/BookPage";
import MoviePage from "./Views/MoviePage/MoviePage";
import Detail from "./Views/BookPage/Detail"
import EditPage from "./Views/BookPage/EditPage";

export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route className='page' exact path="/" element={<LandingPage/>}/>
          <Route className='page' path="/login" element={<LoginPage />}/>
          <Route className='page' path="/register" element={<RegisterPage />}/>
          <Route className='page' path="/book" element={<BookPage />}/>
          <Route className='page' path="/movie" element={<MoviePage />}/>
          <Route className='page' path="/book/:bookId" element={<Detail/>}/>
          <Route className='page' path="/book/:bookId/edit" element={<EditPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
