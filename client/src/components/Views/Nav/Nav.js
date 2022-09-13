import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import './Nav.css'
import {
    logoutUser,
    auth
} from '../../../_actions/user_actions';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Button } from 'antd';

function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [btnText, setbtnText] = useState('log in');
    const [visible, setvisible] = useState(true);

    useEffect(()=>{
        dispatch(auth()).then(response=>{
            if(response.payload.isAuth){
                setbtnText('log out')
                setvisible(false)
            }else{
                setbtnText('log in')
                setvisible(true)
            }
        })
    })

    const onButtonHandler = (event)=>{
        dispatch(auth()).then(response=>{
            if(response.payload.isAuth){

                dispatch(logoutUser())
                .then(response => {
                        if(response.payload.logoutSuccess){
                            navigate('/login');
                            setbtnText('log in')
                            setvisible(true);
                        } else {
                            alert(response.payload.message)
                        }   
                })
                
            }else{
                navigate('/login')
            }
        })
    }

    return (
        <nav>
            <Link className="navLi" to='/'>Home</Link>
            <Link className="navLi" to='/book'>Book</Link>
            <Link className="navLi" to='/movie'>Movie</Link>
            <div id="btnZone">
                {visible && (<Link className="navLi btn" to='/register'>Register</Link>)}
                <Button type="primary" className= "btn" onClick={onButtonHandler}>{btnText}</Button>
            </div>
        </nav>
    )
}

export default Nav