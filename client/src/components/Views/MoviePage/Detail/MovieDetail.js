import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../MoviePage.css'
import { useDispatch } from 'react-redux'
import {getMovieInfo} from '../../../../_actions/movie_actions'
import { Badge, Descriptions, Rate } from 'antd';
//import bookImg from '../../../img/poster.jpg'
import auth from '../../../../hoc/auth'

function MovieDetail() {
    const {movieId} = useParams()
    const [movieImg, setMovieImg] = useState('')
    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [actor,setActor] = useState('')
    const [date, setDate] = useState()
    const [review,setReview] = useState()
    const [rate, setRate] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onClickHandler(){
      navigate(`/movie/${movieId}/edit`)
    }

    // function onRemoveHandler(){
    //   const remove = window.confirm('삭제하시겠습니까?')
    //   if(remove){ 
    //     dispatch(removeBook(bookId))
    //     .then(
    //       navigate('/book')
    //     )
    //   }
    // }

    // const createFlower = (title) =>{
    //   const field = document.querySelector('.field')
    //   const flower= document.createElement('span')
    //   flower.classList.add(`flower`);

    //   const size = Math.random()*20;  
    //   flower.style.width = 35 + size + 'px';
    //   flower.style.height = 35 + size + 'px';
  
    //   flower.style.left = Math.random() * 1080 + 'px';
    //   flower.style.top = 92+Math.random() * 1+ 'vh';

    //   flower.style.opacity = '70%';
    //   field.appendChild(flower);
    // }




    useEffect(()=>{

      // setInterval(createFlower,100);
      dispatch(getMovieInfo(movieId))
      .then(response => {
        setTitle(response.payload.info.title);
        setDirector(response.payload.info.director);
        setActor(response.payload.info.actor);
        setDate((response.payload.info.date).toString().split('T')[0]);
        setReview(response.payload.info.review);
        setRate(parseInt(response.payload.info.rate));
        setMovieImg(response.payload.info.img);

      })
// eslint-disable-next-line
    },[])

      
  return (
    <div className='detailPage'>
      <div className='detailTitle'>{title}</div>
      <Rate disabled value={rate}/>
      <div className='detailBody'>
        <div className='detailBtnZone'>
          <button className='detailBtn' onClick={onClickHandler}>수정</button>
          {/* <button className='detailBtn' onClick={onRemoveHandler}>삭제</button> */}
        </div>
        <div className='detailInfo'>
          <img className="bookImage" src={movieImg} alt={title}/>
          <div className="detailTable">
            <Descriptions column={2} labelStyle={{
              'border' : 'none',
              'fontSize' : "20px",
              'background' : "rgb(222, 239, 185)",
              'width': 'auto',
              "borderRadius": '15px',
              "textAlign" : "center",
              "justifyContent" : "center",
              "padding" : "0 0 0 12px",
              "margin" : "8px 0"
            }} contentStyle = {{
              'fontSize' : "18px",
              'minHeight' : '10px',
              "padding" : '0 15px',
              'border' : 'none',
              "margin" : "8px 0"
            }}>
              <Descriptions.Item label="감독" span={1}>{director}</Descriptions.Item>
              <Descriptions.Item label="관람 날짜" span={2}>{date}</Descriptions.Item>
              <Descriptions.Item labelStyle={{ "alignItems" : "center", "justifyContent" : "center"}} contentStyle={{"whiteSpace":"pre"}} label="소감문" span={2}>{review}</Descriptions.Item>
              <Descriptions.Item label="출연진" span={2}>{actor}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
      <div className='field'></div>
    </div>
  )
}

export default auth(MovieDetail,true)