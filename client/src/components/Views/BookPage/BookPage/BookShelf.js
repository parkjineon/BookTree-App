import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { collectBook } from '../../../../_actions/book_actions';
import '../CSS/Detail.css'

function BookShelf() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getRandomColor(_isAlpha) {
    let r = getRand(180, 255),
    g = getRand(180, 255),
    b = getRand(180, 255),
    a = getRand(0, 10) / 10;
  
    let rgb = _isAlpha ? 'rgba' : 'rgb';
    rgb += '(' + r + ',' + g + ',' + b;
    rgb += _isAlpha ? ',' + a + ')' : ')';
    
    let r2 = r-50,
    g2 = g - 50,
    b2 = b - 50;

    let borderRgb = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')'
  
    return [rgb,borderRgb];
  }

  function getRand(min, max) {
    if (min >= max) return false;
    return ~~(Math.random() * (max - min + 1)) + min;
  };

  function onClickHandler(bookId){
    navigate(`/book/${bookId}`)
  }

  function putTheBook(){
    dispatch(collectBook())
    .then(response =>{
      if(response.payload.collectBookSuccess){
        const shelfPage = document.querySelector('.bookShelfPage')
        const bookShelfList = response.payload.books
        const bookNum = response.payload.books.length
        for(let j = 0; j < parseInt(bookNum/20)+1; j++){
          if(bookNum%20===0 && j === parseInt(bookNum/20)) break;
          const shelf = document.createElement('div');
          shelf.classList.add('bookShelf');
          shelfPage.appendChild(shelf);
          for(let i = j*20; i < bookNum && i < (j+1)*20; i++){

            const one = document.createElement('div');
            one.classList.add('bookOnShelf');
            const num =Math.random()
            one.style.height = num*30 + 60 + 'px';
            one.style.bottom = 15+'px';
            one.style.left= (i-j*20)*20 + 37 + parseInt((i-j*20)/5)*11 +'px';
            const color = getRandomColor()
            one.style.backgroundColor = color[0];
            one.style.border= '4px solid '+color[1];
            one.title = bookShelfList[i].title
            one.addEventListener('click',()=>onClickHandler(bookShelfList[i]._id))
            shelf.appendChild(one);
  
          }
        }


       

      } else {
        alert(response.payload.message)
      }
    })
  }

  useEffect(()=>{
    putTheBook()
  },[])


  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
      <div style={{width:'100%', textAlign:'center', fontSize: '30px', padding: '30px 0 0 0'}}>나만의 책장</div>
      <div className='bookShelfPage'/>
    </div>
  )
}

export default BookShelf