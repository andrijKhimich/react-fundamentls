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
    setPostData([...postData, newPost])
  }

  return (
    <div className="App">

      {/* <Counter /> */}
      {/* <ClassCounter/> */}
      {/* <LiveInput/> */}
      <PostForm create={createPost}/>
      <PostList post={postData} title="Title 1" />
    </div>
  );
}

export default App;
