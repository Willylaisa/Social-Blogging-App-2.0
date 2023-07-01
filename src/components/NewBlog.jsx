import React from 'react';
import "../pages/profile.css"

export default function Blog(props) {
    return (
        <div className='blogs'>
            <div className='blog-container'>
            
                <fieldset>
                    
                    <legend>Write a new blog</legend>
                    <textarea type="text" className='blog-input' placeholder='Write your Blog here' name='content' onChange={props.changeContent} value={props.currentBlog} />

                    <button className='blog-post-btn' onClick={props.post}> Post Blog </button>
                </fieldset>
            </div>
            <div className="my-posts">
                <h2>My Posts</h2>
                <p id='blog-post' ></p>
            </div>
        </div>
    )
}
