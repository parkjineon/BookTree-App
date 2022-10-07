import React from 'react'
import auth from '../../../../hoc/auth'
import MovieList from './MovieList'
import '../MoviePage.css'
import MovieShelf from './MovieShelf'

function MoviePage() {
  return (
    <div className='moviePage'>
      <MovieShelf/>
      <MovieList/>
    </div>
  )
}

export default auth(MoviePage,null)