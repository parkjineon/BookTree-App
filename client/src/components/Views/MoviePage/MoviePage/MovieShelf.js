import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { collectMovie } from '../../../../_actions/movie_actions';
import '../MoviePage.css'

function MovieShelf() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function getRandomColor(_isAlpha) {
  //   let r = getRand(180, 255),
  //   g = getRand(180, 255),
  //   b = getRand(180, 255),
  //   a = getRand(0, 10) / 10;
  
  //   let rgb = _isAlpha ? 'rgba' : 'rgb';
  //   rgb += '(' + r + ',' + g + ',' + b;
  //   rgb += _isAlpha ? ',' + a + ')' : ')';
    
  //   let r2 = r-50,
  //   g2 = g - 50,
  //   b2 = b - 50;

  //   let borderRgb = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')'
  
  //   return [rgb,borderRgb];
  // }

  // function getRand(min, max) {
  //   if (min >= max) return false;
  //   return ~~(Math.random() * (max - min + 1)) + min;
  // };

  function onClickHandler(MovieId){
    navigate(`/movie/${MovieId}`)
  }

  function putTheMovie(){
    dispatch(collectMovie())
    .then(response =>{
      if(response.payload.collectMovieSuccess){
        const movieShelfPage = document.querySelector('.movieShelfPage')
        const movieShelfList = response.payload.movies
        const movieNum = response.payload.movies.length
        for(let j = 0; j < parseInt(movieNum/20)+1; j++){
          if(movieNum%20===0 && j === parseInt(movieNum/20)) break;
          const shelf = document.createElement('div');
          shelf.classList.add('movieShelf');
          movieShelfPage.appendChild(shelf);
          for(let i = j*20; i < movieNum && i < (j+1)*20; i++){

            const one = document.createElement('div');
            one.classList.add('movieOnShelf');
            const num =Math.random()
            one.style.left= (i-j*20)*20 + 60 + parseInt((i-j*20)/5)*11 +'px';
            one.title = movieShelfList[i].title
            one.addEventListener('click',()=>onClickHandler(movieShelfList[i]._id))
            shelf.appendChild(one);
          }
        }
      } else {
        alert(response.payload.message)
      }
    })
  }

  useEffect(()=>{
    putTheMovie()
  },[])


  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <div style={{width:'100%', textAlign:'center', fontSize: '30px', padding: '30px 0 0 0'}}>나만의 티켓</div>
      <div className='movieShelfPage'/>
    </div>
  )
}

export default MovieShelf