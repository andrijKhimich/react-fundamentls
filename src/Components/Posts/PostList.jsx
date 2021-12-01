import React, {useState} from "react";
import Post from "./Post/Posts";
import "./PostList.scss";
const PostList = () => {

  const [postData] = useState([
    { id: 1, title: "Hello", content: "Hello everybody" },
    { id: 2, title: "Hello world", content: "Hello world" },
    { id: 3, title: "Hello everybody", content: "Hello everybody" },
  ]);

  let showPosts = postData.map(newPost => {
    return (
      <Post post={newPost} key={newPost.id} />
    )
  });
  return (
    <div className="postList">
      <h2>Post list</h2>
      {showPosts}
    </div>
  )
}

export default PostList;