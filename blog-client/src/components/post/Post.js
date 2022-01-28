import React from 'react';
import './Post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="#" alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum, dolor sit amet.
                </span>
                <hr />
                <span className="postDate">
                    30 minutes ago
                </span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero?
            </p>
        </div>
    );
}
