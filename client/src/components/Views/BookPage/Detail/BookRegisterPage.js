import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Detail.css'
import { useDispatch } from 'react-redux'
import { registerBook} from '../../../../_actions/book_actions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Descriptions, Rate } from 'antd';
import { ko } from "date-fns/esm/locale";
import auth from "../../../../hoc/auth"
import SearchBookList from './SearchBookList'

function BookRegisterPage() {
    const [modal,setModal] = useState(false)
    const [bookImg, setBookImg] = useState('')
    const [bookName,setBookName] = useState()
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [publisher,setPublisher] = useState('')
    const [status, setStatus] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [review,setReview] = useState()
    const [rate, setRate] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onChangeHandler(e){
      setModal(false);
      setBookName(e.target.value)
    }

    function onSaveHandler(){
      let info = {
        title : title,
        author : author,
        publisher : publisher,
        status : status,
        startDate : startDate,
        endDate : endDate,
        review : review,
        rate : rate,
        img : bookImg
      }
      dispatch(registerBook(info))
      .then(navigate(`/book`))
    }

    function onTitleHandler(e){
      setTitle(e.target.value)
    }

    function onAuthorHandler(e){
      setAuthor(e.target.value)
    }

    function onPublisherHandler(e){
      setPublisher(e.target.value)
    }

    function onRadioHandler(e){
      setStatus(e.target.value)
    }

    function onReviewHandler(e){
      setReview(e.target.value)
    }


  return (
    <div className='detailPage'>
      <div className='search'>
          <input className='bookName' type='text' placeholder='책 이름 ' onChange={onChangeHandler}/>
          <button className='searchBtn' onClick={()=>{setModal(!modal)}}>검색</button>
          {modal&&<SearchBookList setTitle={setTitle} setAuthor={setAuthor} setPublisher={setPublisher} setBookImg={setBookImg} title={bookName}/>}
      </div>
      <div className='detailTitle'><input type='text' name='bookTitle' style={{'width': 'auto', 'textAlign' : 'center', border: '1px solid gray'}} defaultValue={title} onChange={onTitleHandler}/></div>
      <Rate onChange={setRate} value={rate}/>
      <div className='detailBody'>
        <div className='detailBtnZone'><button className='detailBtn' onClick={onSaveHandler}>저장</button></div>
        <div className='detailInfo'>
          <img className="bookImage" alt="book cover" src={bookImg} />
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
            <Descriptions.Item label="저자" span={1}><input type='text' name='bookAuthor' style={{'width':'100%', border:'None', borderBottom: '1px solid gray'}} defaultValue={author} onChange={onAuthorHandler}/></Descriptions.Item>
            <Descriptions.Item label="출판사" span={1}><input type='text' name='bookPublisher' style={{'width':'100%', border: '1px solid gray'}} defaultValue={publisher} onChange={onPublisherHandler}/></Descriptions.Item>
            <Descriptions.Item label="상태" span={2}>
              <input id="0" value= "0" name="status" type="radio" checked = {status === '0'} style={{'fontSize': '20px'}} onChange={onRadioHandler}/> <label style={{'padding': '0 15px 0 2px'}}>읽기 완료</label>
              <input id="1" value="1" name="status" type="radio" checked = {status === '1'} style={{'fontSize': '20px'}} onChange={onRadioHandler}/> <label style={{'padding': '0 15px 0 2px'}}> 읽는 중</label>
              <input id="2" value="2" name="status" type="radio" checked = {status === '2'} style={{'fontSize': '20px'}} onChange={onRadioHandler}/> <label style={{'padding': '0 15px 0 2px'}}> 읽을 예정</label>
            </Descriptions.Item>
            <Descriptions.Item label="시작 날짜" span={1}><DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected= {startDate} onChange={(date) => setStartDate(date)} /></Descriptions.Item>
            <Descriptions.Item label="끝 날짜" span={1}><DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected= {endDate} onChange={(date) => setEndDate(date)} /></Descriptions.Item>
            <Descriptions.Item label="소감문" span={2} labelStyle={{ "alignItems" : "center", "justifyContent" : "center"}}><textarea name='bookReview' style={{'width':'100%', 'maxHeight' : '200px'}} defaultValue={review} onChange={onReviewHandler}/></Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
    <div className='field'></div>
  </div>
)}

export default auth(BookRegisterPage,true)