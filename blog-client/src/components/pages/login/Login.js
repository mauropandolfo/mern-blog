import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Log-In</span>
            <form className="loginForm">
                <label>E-Mail</label>
                <input type="text" className="loginInput" placeholder='E-Mail...' />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder='Password...'/>
                <button className="loginButton">Log-In</button>
            </form>
            <button className='loginRegisterButton'>
                <Link className='link' to='/register'>Register</Link>
            </button>

        </div>
    );
}
