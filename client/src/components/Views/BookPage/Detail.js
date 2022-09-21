import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CSS/Detail.css'
import { useDispatch } from 'react-redux'
import {getInfo} from '../../../_actions/book_actions'
import { Badge, Descriptions, Rate } from 'antd';
import bookImg from '../../img/poster.jpg'
import auth from '../../../hoc/auth'

function Detail() {
    const {bookId} = useParams()
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [publisher,setPublisher] = useState('')
    const [status, setStatus] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [review,setReview] = useState()
    const [rate, setRate] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onClickHandler(){
      navigate(`/book/${bookId}/edit`)
    }

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
      dispatch(getInfo(bookId))
      .then(response => {
        setTitle(response.payload.info.title);
        setAuthor(response.payload.info.author);
        setPublisher(response.payload.info.publisher);
        setStatus(response.payload.info.status);
        setStartDate((response.payload.info.startDate).toString().split('T')[0]);
        setEndDate((response.payload.info.endDate).toString().split('T')[0]);
        setReview(response.payload.info.review);
        setRate(parseInt(response.payload.info.rate));

      })

    },[])

      
  return (
    <div className='detailPage'>
      <div className='detailTitle'>{title}</div>
      <Rate disabled value={rate}/>
      <div className='detailBody'>
        <div className='detailBtnZone'><button className='detailBtn' onClick={onClickHandler}>수정</button></div>
        <div className='detailInfo'>
          <img className="bookImage" alt="book cover" src={bookImg} />
          <div className="detailTable">
            <Descriptions column={2} labelStyle={{
              'border' : 'none',
              'fontSize' : "20px",
              'background' : "rgb(222, 239, 185)",
              'width': 'auto',
              "border-radius": '15px',
              "textAlign" : "center",
              "justifyContent" : "center",
              "padding" : "0 0 0 12px",
              "margin" : "8px 0"
            }} contentStyle = {{
              'fontSize' : "18px",
              'min-height' : '10px',
              "padding" : '0 15px',
              'border' : 'none',
              "margin" : "8px 0"
            }}>
              <Descriptions.Item label="저자" span={1}>{author}</Descriptions.Item>
              <Descriptions.Item label="출판사" span={1}>{publisher}</Descriptions.Item>
              <Descriptions.Item label="상태" span={2}>
                {status===0 && <Badge style={{'fontSize': '20px'}} status="success" text="읽기 완료" />}
                {status===1 && <Badge style={{'fontSize': '20px'}} status="processing" text="읽는 중" />}
                {status===2 && <Badge  style={{'fontSize': '20px'}}status="warning" text="읽을 예정" />}
              </Descriptions.Item>
              <Descriptions.Item label="시작 날짜" span={1}>{startDate}</Descriptions.Item>
              <Descriptions.Item label="끝 날짜" span={1}>{endDate}</Descriptions.Item>
              <Descriptions.Item label="소감문" span={2}>{review}</Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
      <div className='field'></div>
    </div>
  )
}

export default auth(Detail,true)