import React from "react";
import Post from "./Post/Posts";
import "./PostList.scss";

const PostList = (props) => {
  // console.log(props);

  let post = props.post
  let showPosts;

  if (!post.length) {
    return <h2>Posts not found</h2>
  } showPosts = post.map((newPost, index) => {
    return (
      <Post remove={props.remove} post={newPost} key={newPost.id} number={index + 1} />
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