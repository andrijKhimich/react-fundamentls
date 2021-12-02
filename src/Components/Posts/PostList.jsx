import React from "react";
import Post from "./Post/Posts";
import "./PostList.scss";

const PostList = (props) => {
  let post = props.post

  let showPosts = post.map((newPost, index) => {
    return (
      <Post post={newPost} key={newPost.id} number={index + 1} />
    )
  });

  return (
    <div className="postList">
      <h2>{props.title}</h2>
      {showPosts}
    </div>
  )
}

export default PostList;