import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { collectBook } from '../../../../_actions/book_actions';
import '../CSS/Detail.css'

function BookShelf() {
  const dispatch = useDispatch();
  function getRandomColor(_isAlpha) {
    let r = getRand(0, 255),
    g = getRand(0, 255),
    b = getRand(0, 255),
    a = getRand(0, 10) / 10;
  
    let rgb = _isAlpha ? 'rgba' : 'rgb';
    rgb += '(' + r + ',' + g + ',' + b;
    rgb += _isAlpha ? ',' + a + ')' : ')';
  
    return rgb;
  }

  function getRand(min, max) {
    if (min >= max) return false;
    return ~~(Math.random() * (max - min + 1)) + min;
  };

  function putTheBook(){
    dispatch(collectBook())
    .then(response =>{
      if(response.payload.collectBookSuccess){
        const page = document.querySelector('.bookShelfPage')
        const bookList = response.payload.books

        const shelf = document.createElement('div');
        page.appendChild(shelf);
        shelf.classList.add('bookShelf');

        bookList.map((book,i)=>{
          
          const one = document.createElement('div');
          one.classList.add('bookOnShelf');
          const num =Math.random()
          one.style.height = num*30 + 60 + 'px';
          one.style.bottom = 15+'px';
          one.style.left=i*20 + 38 + parseInt(i/5)*9 +'px';
          one.style.backgroundColor = getRandomColor();
          shelf.appendChild(one);

        })

       

      } else {
        alert(response.payload.message)
      }
    })
  }

  useEffect(()=>{
    putTheBook()
  })


  return (
    <div className='bookShelfPage'>
    </div>
  )
}

export default BookShelf