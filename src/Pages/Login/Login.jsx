import React,{ useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { login,logout } from '../../data/actions/user';
import {
    NavLink
  } from "react-router-dom";
  import './login.css'

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    useEffect(() => {
        dispatch(logout())
    }, []);
    

    return (
        <div id='login-page'>
            
            <div id='login'>
                <h1>LOGIN</h1>
            </div>

            <form id='login-form'>      

                <label className='login-label'>Name:</label>
                <input value ={name} onChange={(e) =>setName(e.target.value)} className='login-input-fields' type="text"/>
            
                <label className='login-label'>Password:</label>
                <input value ={pass} onChange={(e) =>setPass(e.target.value)} className='login-input-fields' type="password"/>
                
            
                
                            
                {
                    (name==='admin' && pass==='admin') ?
                    
                    <NavLink to= '/admin' className='login-button' onClick={()=>dispatch(login())} >Admin</NavLink>
                    :(!name || !pass) ? null : <NavLink to= '/user' className='login-button' onClick={()=>dispatch(login())}>Login</NavLink>
                }

            </form>

        </div>
    )
}

export default Login
