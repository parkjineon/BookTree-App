import React from 'react'
import auth from '../../../hoc/auth'
import MovieMain from './MovieMain'
import MovieList from './MovieList'
import './MoviePage.css'

function MoviePage() {
  return (
    <div className='moviePage'>
      <MovieMain/>
      <MovieList/>
    </div>
  )
}

export default auth(MoviePage,null)