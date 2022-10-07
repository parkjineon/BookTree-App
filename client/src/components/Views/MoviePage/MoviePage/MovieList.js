import React, { useEffect } from 'react'
import '../MoviePage.css'
// import {collectMovie} from '../../../../_actions/Movie_actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // function onClickMovieHandler(MovieId){
  //   navigate(`/Movie/${MovieId}`)
  // }
  // useEffect(()=>{
    
  //   dispatch(collectMovie())
  //   .then(response => {
  //     const MovieList = document.querySelector('.MovieList')

  //     if(response.payload.collectMovieSuccess){
  //       (response.payload.Movies).map((Movie, i) =>{
  //         const oneMovie = document.createElement('img')
  //         oneMovie.classList.add('AMovie')
  //         oneMovie.addEventListener("click",()=>onClickMovieHandler(Movie._id))
  //         oneMovie.src = Movie.img;
  //         oneMovie.alt = Movie.title;
  //         MovieList.appendChild(oneMovie);
  //       })

  //     }else {
  //       alert(response.payload.message)
  //     }
  //     })
  //   })

  return (
    <div className='MovieList'>
    </div>
  )
}

export default MovieList