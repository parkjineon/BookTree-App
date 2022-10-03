import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {searchKakaoBook} from '../../../../_actions/book_actions'

function SearchBookList(props) {
    const dispatch= useDispatch();
    
    function setInfo(title,author,publisher,img){
        props.setTitle(title)
        props.setPublisher(publisher)
        props.setAuthor(author)
        props.setBookImg(img)
    }
    useEffect(()=>{
        const params={
            query: props.title,
            target: 'title'
        }
        
        dispatch(searchKakaoBook(params))
        .then(response => {
            const list = response.payload.documents
            const page = document.querySelector('.searchBookList')
            

        list.map((book, i)=>{
            const one = document.createElement('li');
            one.classList.add('searchBook');
            one.addEventListener('click',()=>setInfo(book.title,book.authors[0],book.publisher,book.thumbnail)) 
            one.textContent = book.authors[0] +' '+book.title +' '+ book.publisher
            page.appendChild(one);
        })


        })
    },[])

  return (
    <div className='searchBookList'></div>
  )
}

export default SearchBookList