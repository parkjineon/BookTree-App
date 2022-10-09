import React from 'react'
import auth from '../../../../hoc/auth'
import MovieList from './MovieList'
import '../MoviePage.css'
import MovieShelf from './MovieShelf'
import { useNavigate } from 'react-router-dom'

function MoviePage() {
  const navigate = useNavigate();

  function onClickHandler(){
    navigate('/movie/register');
  }

  return (
    <div className='moviePage'>
      <MovieShelf/>
      <div className='detailBtnZone'><button className='detailBtn bookPageRegister' onClick={onClickHandler}>등록</button></div>
      <MovieList/>
    </div>
  )
}

export default auth(MoviePage,true)