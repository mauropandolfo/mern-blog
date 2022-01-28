import React from 'react';
import { FaLink, FaLinkedin, FaGithub, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Topbar.css'

export default function Topbar() {
    const user = false
    return (
        <div className='top'>
            <div className='topLeft'>
                <FaLink className="topIcon"/>
                <FaLinkedin className="topIcon"/>
                <FaGithub className="topIcon"/>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/write'>Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && 'Log-Out'}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                user ? (
                        <Link className='link' to='/settings'>
                            <img src="#" className='topImg' alt="" />
                        </Link>
                    ): (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>Log-In</Link>
                            </li>
                            <li className='topListItem'>
                            <Link className='link' to='/register'>Register</Link>
                            </li>
                        </ul>
                    )
                }
                <FaSearch className="topSearchIcon"/>
            </div>
        </div>
    );
}
