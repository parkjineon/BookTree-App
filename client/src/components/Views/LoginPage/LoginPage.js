import React, { useState } from 'react';
import {loginUser} from '../../../_actions/user_actions';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import auth from '../../../hoc/auth';
import './LoginPage.css'

function LoginPage(props) {
  const dispatch = useDispatch()
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const navigate = useNavigate();

  const onEmailHandler = (event)=>{
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event)=>{
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    let body = {
      email: Email,
      password : Password
    }

    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess){
          navigate('/');
        } else {
          alert(response.payload.message)
        }
      })
      
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '93vh',
      backgroundColor: 'rgb(245, 252, 249)',
      fontFamily: "KyoboHandwriting2020A"
    }}>
      <form style={{display:"flex", flexDirection: "column" }} onSubmit={onSubmitHandler} >
        <label className='logPagelabel'>email</label>
        <input type="email" className='logPageinput' value={Email} onChange={onEmailHandler}/>
        <br/>
        <label className='logPagelabel'>password</label>
        <input type="password" className='logPageinput' value={Password} onChange={onPasswordHandler}/>
        <br/>
        <button className='logPagebutton'>Log in</button>
      </form>
    </div>
  )
}

export default auth(LoginPage,false)