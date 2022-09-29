import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../hoc/auth';
import '../CSS/Detail.css'
import BookList from './BookList';
import BookShelf from './BookShelf';

function BookPage() {
  const navigate = useNavigate();

  function onClickHandler(){
    navigate('/book/register');
  }

  return (
    <div className='bookPage'>
      <BookShelf/>
      <div className='detailBtnZone'><button className='detailBtn' onClick={onClickHandler}>등록</button></div>
      <BookList/>
    </div>
  )
}
export default auth(BookPage,true)