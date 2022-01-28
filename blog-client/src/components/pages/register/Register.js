import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder='Username...' />
                <label>E-Mail</label>
                <input type="text" className="registerInput" placeholder='E-Mail...' />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder='Password...'/>
                <button className="registerButton">Register</button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to='/login'>Log-In</Link>
            </button>
        </div>
    );
}
