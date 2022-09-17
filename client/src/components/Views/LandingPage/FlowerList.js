import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { collectBook } from '../../../_actions/book_actions';
import {useNavigate} from 'react-router-dom';
import './CSS/LandingPage.css'

function FlowerList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onClickFlowerHandler(bookId){
    navigate(`/book/${bookId}`)
  }

  //난수 생성
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //create element 공통부분 함수
  function createSTH(STH){
    const size = Math.random()*10;  
    STH.style.width = 35 + size + 'px';
    STH.style.height = 35 + size + 'px';
    let num = rand(1, 10);

    if(num===1||num===2||num===3){
      STH.style.left = Math.random() * 590 - 20 + 'px';
      STH.style.top = 335+Math.random() * 100+ 'px';
    }else if(num===4||num===5||num===6){
      STH.style.left = 5 + Math.random() * 545 + 'px';
      STH.style.top = 225+Math.random() * 100+ 'px';
    }else if(num===7||num===8||num===9){
      STH.style.left = 50+Math.random() * 450 + 'px';
      STH.style.top = 125+Math.random() * 100+ 'px';
    }else{
      STH.style.left = 150+Math.random() * 250 + 'px';
      STH.style.top = 40+Math.random() * 90+ 'px';
    }
    
  }


  const createFlower = (title) =>{
    const tree = document.querySelector('.tree')
    const flower= document.createElement('span')
    flower.classList.add(`flower`);
    createSTH(flower)
    flower.title = `제목: ${title.title}\n저자: ${title.author}`
    flower.addEventListener("click",()=>onClickFlowerHandler(title._id))
    tree.appendChild(flower);
  }
  
  const createApple= (num) =>{
    const tree = document.querySelector('.tree')
    const apple= document.createElement('span')
    apple.classList.add(`apple`);
    createSTH(apple)
    apple.title = `★등록된 책 ${num}개★`
    tree.appendChild(apple);
  }

  const createLeaf= () =>{
    const tree = document.querySelector('.tree')
    const leaf1= document.createElement('span')
    const leaf2= document.createElement('span')
    const leaf3= document.createElement('span')
    leaf1.classList.add(`leaf1`);
    leaf2.classList.add(`leaf2`);
    leaf3.classList.add(`leaf3`);
    createSTH(leaf1)
    createSTH(leaf2)
    createSTH(leaf3)
    tree.appendChild(leaf1);
    tree.appendChild(leaf2);
    tree.appendChild(leaf3);
  }
  
  useEffect(()=>{

    dispatch(collectBook())
    .then(response => {
      if(response.payload.collectBookSuccess){
        var length = response.payload.books.length

        for(let i=1; i <= length*3; i++){
          createLeaf()
        }
    
        for(let i=1; i <= length; i++){
          if((i%5)===0){
            createApple(i)
          }
          createFlower(response.payload.books[i-1])
        }

      } else {
        alert(response.payload.message)
      }
    })
    
// eslint-disable-next-line 
  },[])

  return (
    <div className='tree'>

    </div>
  )
}

export default FlowerList
