import React from 'react'
import GridCard from './Session/GridCard'
import './CSS/Detail.css'

function MainMovie() {
  return (
    <div className='background'>
      <div className='miniNav'> 
        <div className='miniTitle'>movie</div>
        <button className='miniButton'>더보기</button>
      </div>
      <div className='gridContainer'>
        <GridCard />
      </div>
    </div>
  )
}

export default MainMovie