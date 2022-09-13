import React from 'react';
import auth from '../../../hoc/auth';
import './CSS/LandingPage.css' 
import FlowerList from './FlowerList';

function LandingPage() {

  return (
    <div className='LandingPage'>
      <FlowerList />
    </div>
  )
}

export default auth(LandingPage, null)
