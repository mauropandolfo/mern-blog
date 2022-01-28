import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <header>
                <div className='headerTitles'>
                    <span className='headerTitleSm'>React & node</span>
                    <span className='headerTitleLg'>Blog</span>
                </div>
                <img src="#" alt="" className="headerImg" />
            </header>
        </div>
    );
}
