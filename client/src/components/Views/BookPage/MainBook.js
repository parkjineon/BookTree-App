import React from 'react'
import GridCard from './Session/GridCard'
import './CSS/Detail.css'

function MainBook() {
  return (
    <div className='background'>
      <div className='miniNav'> 
        <div className='miniTitle'>book</div>
        <button className='miniButton'>더보기</button>
      </div>
      <div className='miniBody'>
        <div className='gridContainer'>
          <GridCard />
        </div>
      </div>
    </div>
  )
}

export default MainBook