import React, { useState } from 'react';
import "./blog.css"

const BlogPost = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleLikeClick = () => {
    onLike(post.id);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onAddComment(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="image-container">

      <img src={post.image} alt="Blog Post" className='image'/>

      </div>

      <div>
        Likes: {post.likes}
        <button className='likeButton' onClick={handleLikeClick}><i className='fa fa-heart'></i></button>
      </div>
      <div>
        <form onSubmit={handleCommentSubmit}>
          <input type="text" value={comment} onChange={handleCommentChange} placeholder="Add a comment" />
          <button className='commentButton' type="submit"><i class="fa fa-paper-plane"></i></button>
        </form>
      </div>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}



      </div>
    </div>
  );
};

export default BlogPost;
