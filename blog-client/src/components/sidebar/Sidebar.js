import React from 'react';
import { FaLink, FaLinkedin, FaGithub } from "react-icons/fa";
import './Sidebar.css'

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img src="#" alt="" className="sidebarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta distinctio ab inventore explicabo rem ratione consectetur voluptatibus, magnam facilis, velit consequatur excepturi adipisci. Libero fugiat, optio ratione accusantium ad soluta voluptatem totam dolore laudantium, hic a ipsum debitis odit!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Contact-Me</span>
                <div className="sidebarSocial">
                    <FaLink className="sidebarIcon"/>
                    <FaLinkedin className="sidebarIcon"/>
                    <FaGithub className="sidebarIcon"/>
                </div>
            </div>
        </div>
    );
}
