import React, { useState } from "react";
import PostList from "./Components/Posts/PostList";
// import MyBtn from "./Components/UI/Button/Button";
// import MyInput from "./Components/UI/Input/Input";
// import Post from "./Components/Posts/Post/Posts";
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
// import LiveInput from "./Components/LiveInput";

import "./App.scss"
import PostForm from "./Components/UI/PostForm";


const App = () => {

  const [postData, setPostData] = useState([
    { id: 1, title: "Hello", content: "Hello" },
    { id: 2, title: "Hello world", content: "Hello world" },
    { id: 3, title: "Hello everybody", content: "Hello everybody" },
  ]);

  const createPost = (newPost) => {
    setPostData([newPost, ...postData])
  }

  const removePost = (post) => {
    // e.target.parentElement.remove();
    // console.log(post);
    setPostData(postData.filter(p => p.id !== post.id));
  }
  return (
    <div className="App">
      {postData.length !== 0 ?
        <PostList remove={removePost} post={postData} />
        : <h2>posts no found</h2>}


      {/* <Counter /> */}
      {/* <ClassCounter/> */}
      {/* <LiveInput/> */}
      <PostForm create={createPost} remove={removePost} />

    </div>
  );
}

export default App;
