import React, { useState } from 'react';
import {registerUser} from '../../../_actions/user_actions';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import auth from '../../../hoc/auth'
import './RegisterPage.css'


function RegisterPage(props) {
  const dispatch = useDispatch()
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [SndPassword, setSndPassword] = useState("")
  const [Name,setName] = useState("")
  const [CheckPassword,setCheckPassword] = useState('\u00A0')
  const [Style,setStyle] = useState({fontSize:"2pt", padding: "2em 0", color:'black'})
  const navigate = useNavigate();

  const checkingPasswordMessage= (data,event)=>{
    if(event.currentTarget.value==="" || data===""){
      setCheckPassword('\u00A0')
    }else{
      if(data!==event.currentTarget.value){
        setStyle({fontSize:"10pt", padding: '5px 1px', color:'red'})
        setCheckPassword("비밀번호가 일치하지 않습니다.")
      }
      else{
        setStyle({fontSize:"10pt", padding: '5px 1px', color:'blue'})
        setCheckPassword("비밀번호가 일치합니다.")
      }
    }
  }

  const onEmailHandler = (event)=>{
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event)=>{
    setPassword(event.currentTarget.value)
    checkingPasswordMessage(SndPassword,event)
  }

  const onNameHandler = (event)=>{
    setName(event.currentTarget.value)
  }

  const onCheckingPassword = (event)=>{
    setSndPassword(event.currentTarget.value)
    checkingPasswordMessage(Password,event)
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();

    if(Password!==SndPassword){
      return alert('비밀번호가 다릅니다.')
    }
    
    let body = {
      email: Email,
      name: Name,
      password : Password
    }

    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.registerSuccess){
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
      minWidth: '1100px',
      width: '100%',
      height: '93vh',
      backgroundColor: 'rgb(245, 252, 249)',
      fontFamily: "KyoboHandwriting2020A"
    }}>
      <form style={{display:"flex", flexDirection: "column" }} onSubmit={onSubmitHandler} >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <br/>
        <label>Name</label>
        <input type="name" value={Name} onChange={onNameHandler}/>
        <br/>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>
        <br/>
        <label>Password again</label>
        <input type="password" onChange={onCheckingPassword}/>
        <span style={Style}>{CheckPassword}</span>
        <button className='userRegisterPageButton'>회원 가입</button>
      </form>
    </div>
  )
}

export default auth(RegisterPage,false)