import React, { useState } from 'react';
import auth from '../../../hoc/auth';
import './CSS/LandingPage.css' 
import FlowerList from './FlowerList';
import LeavesFalling from './LeavesFalling'
import { useNavigate } from 'react-router-dom';
import RegisterType from './RegisterType';

function LandingPage() {
  const navigate = useNavigate();
  const [modal,setModal] = useState(false);

  function onOpenModal(){
    setModal(!modal);
  }

  return (
    <div className='LandingPage'>
      <LeavesFalling/>
      <FlowerList />
      <div className='readingBoy' onClick={onOpenModal}></div> 
      {modal&&<RegisterType/>}
    </div>
  )
}

export default auth(LandingPage, null)
