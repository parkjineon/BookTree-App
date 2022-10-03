import React, { useEffect } from 'react'
import '../CSS/Detail.css'
import {collectBook} from '../../../../_actions/book_actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function BookList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function onClickBookHandler(bookId){
    navigate(`/book/${bookId}`)
  }
  useEffect(()=>{
    
    dispatch(collectBook())
    .then(response => {
      const bookList = document.querySelector('.bookList')

      if(response.payload.collectBookSuccess){
        (response.payload.books).map((book, i) =>{
          const oneBook = document.createElement('img')
          oneBook.classList.add('ABook')
          oneBook.addEventListener("click",()=>onClickBookHandler(book._id))
          oneBook.src = book.img;
          oneBook.alt = book.title;
          bookList.appendChild(oneBook);
        })

      }else {
        alert(response.payload.message)
      }
      })
    })

  return (
    <div className='bookList'>
    </div>
  )
}

export default BookList