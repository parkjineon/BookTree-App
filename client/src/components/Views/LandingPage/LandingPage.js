import React from 'react';
import auth from '../../../hoc/auth';
import './CSS/LandingPage.css' 
import FlowerList from './FlowerList';
import LeavesFalling from './LeavesFalling'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate()

  function onOpenModal(){
    navigate('/book/register')
  }

  return (
    <div className='LandingPage'>
      <LeavesFalling/>
      <FlowerList />
      <div className='readingBoy' onClick={onOpenModal}></div> 
    </div>
  )
}

export default auth(LandingPage, null)
