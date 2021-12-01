import React from 'react';
import "./Post.scss";

const Post = (props) => {
  console.log(props);

  return (
    <div className="post" id={props.post.id}>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <button>Delete</button>
    </div>
  )
}

export default Post;