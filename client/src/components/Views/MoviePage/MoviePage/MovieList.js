import React, { useEffect } from 'react'
import '../MoviePage.css'
import {collectMovie} from '../../../../_actions/movie_actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function onClickMovieHandler(MovieId){
    navigate(`/movie/${MovieId}`)
  }
  useEffect(()=>{
    
    dispatch(collectMovie())
    .then(response => {
      const MovieList = document.querySelector('.movieList')

      if(response.payload.collectMovieSuccess){
        (response.payload.movies).map((movie, i) =>{
          const oneMovie = document.createElement('img')
          oneMovie.classList.add('AMovie')
          oneMovie.addEventListener("click",()=>onClickMovieHandler(movie._id))
          oneMovie.src = movie.img;
          oneMovie.alt = movie.title;
          MovieList.appendChild(oneMovie);
        })

      }else {
        alert(response.payload.message)
      }
      })
    })

  return (
    <div className='movieList'>
    </div>
  )
}

export default MovieList