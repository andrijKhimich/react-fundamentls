import React, { useState } from "react";
import PostList from "./Components/Posts/PostList";
import MyBtn from "./Components/UI/Button/Button";
import MyInput from "./Components/UI/Input/Input";
// import Post from "./Components/Posts/Post/Posts";
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
// import LiveInput from "./Components/LiveInput";

import "./App.scss"


const App = () => {

  const [postData, setPostData] = useState([
    { id: 1, title: "Hello", content: "Hello" },
    { id: 2, title: "Hello world", content: "Hello world" },
    { id: 3, title: "Hello everybody", content: "Hello everybody" },
  ]);

  const [title, setPostTitle] = useState("");
  const [content, setPostText] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content
    }
    setPostData([...postData, newPost]);
    setPostTitle("");
    setPostText("");
  }

  return (
    <div className="App">
      <form action="#">
        {/* <MyInput onChange={e => setTitle(e.target.value)} value={title} />
         */}
        <MyInput
          type="text"
          placeholder="Post Title"
          onChange={e => setPostTitle(e.target.value)}
          value={title}
        />

        <MyInput
          type="text"
          placeholder="Post Text"
          onChange={e => setPostText(e.target.value)}
          value={content}
        />
        <MyBtn btnTitle="Add post" onClick={addNewPost} />
      </form>
      {/* <Counter /> */}
      {/* <ClassCounter/> */}
      {/* <LiveInput/> */}
      <PostList post={postData} title="Title 1" />
    </div>
  );
}

export default App;
