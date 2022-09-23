import React from 'react';
import auth from '../../../hoc/auth';
import './CSS/LandingPage.css' 
import FlowerList from './FlowerList';
import LeavesFalling from './LeavesFalling'

function LandingPage() {

  return (
    <div className='LandingPage'>
      <LeavesFalling/>
      <FlowerList />
      <div className='readingBoy'></div> 
    </div>
  )
}

export default auth(LandingPage, null)
