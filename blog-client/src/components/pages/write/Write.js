import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Write.css'

export default function Write() {
    return (
        <div className="write">
            <img src="#" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FaPlus className='writeIcon'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placerholder='Write something to us...' 
                        type='text' 
                        className='writeInput writeText'
                    >
                    </textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    );
}
