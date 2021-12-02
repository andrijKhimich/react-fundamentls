import React from 'react';
import "./Post.scss";

const Post = (props) => {
  
  return (
    <div className="post">
      <h1><strong>{props.number}</strong>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <button>Delete</button>
    </div>
  )
}

export default Post;