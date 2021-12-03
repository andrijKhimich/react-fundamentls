import React from 'react';
import MyBtn from '../../UI/Button/Button';
import "./Post.scss";

const Post = (props) => {
  // console.log(props);
  return (
    <div className="post" id={props.post.id}>
      <h1><strong>{props.number}</strong>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <MyBtn onClick={() => props.remove(props.post)} btnTitle="Delete" />
    </div>
  )
}

export default Post;