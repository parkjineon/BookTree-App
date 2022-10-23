import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {searchKakaoImg} from '../../../../_actions/movie_actions'

function SearchMovieImg(props) {
    const dispatch= useDispatch();
    
    useEffect(()=>{
        const params={
            query: '영화'+props.title+'포스터',
            size: 5
        }
        
        dispatch(searchKakaoImg(params))
        .then(response => {
            const list = response.payload.documents
            const page = document.querySelector('.searchMovieImg')
            
            let j = 0;
            list.map((img, i)=>{
                try{
                    const one = document.createElement('img');
                    one.classList.add('searchImg');
                    one.src=img.thumbnail_url
                    one.addEventListener('click',()=>props.setMovieImg(img.thumbnail_url)) 
                    page.appendChild(one);
                }catch(error){
                    console.log(
                        '에러다'
                    )
                }
            })
        })
    },[])

  return (
    <div className='searchMovieImg'></div>
  )
}

export default SearchMovieImg