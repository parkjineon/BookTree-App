import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../MoviePage.css'
import { useDispatch } from 'react-redux'
import {registerMovie} from '../../../../_actions/movie_actions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Descriptions, Rate } from 'antd';
import { ko } from "date-fns/esm/locale";
import auth from "../../../../hoc/auth"


function BookRegisterPage() {
    const [modal,setModal] = useState(false)
    const [bookImg, setBookImg] = useState('')
    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [actor,setActor] = useState('')
    const [date, setDate] = useState()
    const [review,setReview] = useState()
    const [rate, setRate] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // function onChangeHandler(e){
    //   setModal(false);
    //   setBookName(e.target.value)
    // }

    function onSaveHandler(){
      let info = {
        title : title,
        director : director,
        actor : actor,
        date : date,
        review : review,
        rate : rate,
        img : bookImg
      }
      dispatch(registerMovie(info))
      .then(navigate(`/movie`))
    }

    function onTitleHandler(e){
      setTitle(e.target.value)
    }

    function onDirectorHandler(e){
      setDirector(e.target.value)
    }

    function onActorHandler(e){
      setActor(e.target.value)
    }


    function onReviewHandler(e){
      setReview(e.target.value)
    }


  return (
    <div className='detailPage'>
      {/* <div className='search'>
          <input className='bookName' type='text' placeholder='책 이름 ' onChange={onChangeHandler}/>
          <button className='searchBtn' onClick={()=>{setModal(!modal)}}>검색</button>
          {modal&&<SearchBookList setTitle={setTitle} setdirector={setdirector} setActor={setActor} setBookImg={setBookImg} title={bookName}/>}
      </div> */}
      <div className='detailTitle'><input type='text' name='movieTitle' style={{'width': 'auto', 'textAlign' : 'center', border: '1px solid gray'}} defaultValue={title} onChange={onTitleHandler}/></div>
      <Rate onChange={setRate} value={rate}/>
      <div className='detailBody'>
        <div className='detailBtnZone'><button className='detailBtn' onClick={onSaveHandler}>저장</button></div>
        <div className='detailInfo'>
          <img className="bookImage" alt="Movie Poster" src={bookImg} />
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
            <Descriptions.Item label="감독" span={1}><input type='text' name='movieDirector' style={{'width':'100%', border: '1px solid gray'}} defaultValue={director} onChange={onDirectorHandler}/></Descriptions.Item>
            <Descriptions.Item label="관람 날짜" span={2}><DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected= {date} onChange={(date) => setDate(date)} /></Descriptions.Item>
            <Descriptions.Item label="소감문" span={2} labelStyle={{ "alignItems" : "center", "justifyContent" : "center"}}><textarea name='movieReview' style={{'width':'100%', 'maxHeight' : '200px'}} defaultValue={review} onChange={onReviewHandler}/></Descriptions.Item>
            <Descriptions.Item label="출연진" span={2}><input type='text' name='movieActor' style={{'width':'100%', border: '1px solid gray'}} defaultValue={actor} onChange={onActorHandler}/></Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
    <div className='field'></div>
  </div>
)}

export default auth(BookRegisterPage,true)