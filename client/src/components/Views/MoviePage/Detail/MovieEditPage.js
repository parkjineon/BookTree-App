import React, {useState, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import '../MoviePage.css'
import { useDispatch } from 'react-redux'
import { editMovieInfo, getMovieInfo} from '../../../../_actions/movie_actions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Descriptions, Rate } from 'antd';
import { ko } from "date-fns/esm/locale";
import auth from "../../../../hoc/auth"


function MovieEditPage() {
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
        img : movieImg
      }
      dispatch(editMovieInfo(movieId,info))
      .then(navigate(`/movie/${movieId}`))
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

    useEffect(()=>{

        dispatch(getMovieInfo(movieId))
        .then(response => {
          setTitle(response.payload.info.title);
          setDirector(response.payload.info.director);
          setActor(response.payload.info.actor);
          setDate(new Date(response.payload.info.date))
          setReview(response.payload.info.review);
          setRate(parseInt(response.payload.info.rate));
          setMovieImg(response.payload.info.img);
  
        })
  // eslint-disable-next-line
      },[])

      return (
        <div className='detailPage'>
          {/* <div className='search'>
              <input className='bookName' type='text' placeholder='??? ?????? ' onChange={onChangeHandler}/>
              <button className='searchBtn' onClick={()=>{setModal(!modal)}}>??????</button>
              {modal&&<SearchBookList setTitle={setTitle} setdirector={setdirector} setActor={setActor} setBookImg={setBookImg} title={bookName}/>}
          </div> */}
          <div className='detailTitle'><input type='text' name='movieTitle' style={{'width': 'auto', 'textAlign' : 'center', border: '1px solid gray'}} defaultValue={title} onChange={onTitleHandler}/></div>
          <Rate onChange={setRate} value={rate}/>
          <div className='detailBody'>
            <div className='detailBtnZone'><button className='detailBtn' onClick={onSaveHandler}>??????</button></div>
            <div className='detailInfo'>
              <img className="bookImage" alt="Movie Poster" src={movieImg} />
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
                <Descriptions.Item label="??????" span={1}><input type='text' name='movieDirector' style={{'width':'100%', border: '1px solid gray'}} defaultValue={director} onChange={onDirectorHandler}/></Descriptions.Item>
                <Descriptions.Item label="?????? ??????" span={1}><DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected= {date} onChange={(date) => setDate(date)} /></Descriptions.Item>
                <Descriptions.Item label="?????????" span={2} labelStyle={{ "alignItems" : "center", "justifyContent" : "center"}}><textarea name='movieReview' style={{'width':'100%', 'maxHeight' : '200px'}} defaultValue={review} onChange={onReviewHandler}/></Descriptions.Item>
                <Descriptions.Item label="?????????" span={2}><input type='text' name='movieActor' style={{'width':'100%', border: '1px solid gray'}} defaultValue={actor} onChange={onActorHandler}/></Descriptions.Item>
              </Descriptions>
            </div>
          </div>
        </div>
        <div className='field'></div>
      </div>
    )}

export default auth(MovieEditPage,true)