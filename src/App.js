import React, { useState, useMemo } from "react";
import PostList from "./Components/Posts/PostList";
// import MyBtn from "./Components/UI/Button/Button";
// import MyInput from "./Components/UI/Input/Input";
// import Post from "./Components/Posts/Post/Posts";
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
// import LiveInput from "./Components/LiveInput";

import "./App.scss"
import PostForm from "./Components/UI/PostForm";
import PostFilter from "./Components/PostFilter";
// import Select from "./Components/UI/Select/Select";
// import MyInput from "./Components/UI/Input/Input";


const App = () => {

  const [postData, setPostData] = useState([
    { id: 1, title: "aaa", content: "Hello" },
    { id: 2, title: "bbb 1", content: "Hello 2" },
    { id: 3, title: "ccc 2", content: "Hello 1" },
  ]);
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" })

  const sortedPosts = useMemo(() => {
    // console.log("Працює");
    if (filter.sort) {
      return [...postData].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return postData
  }, [filter.sort, postData]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(postData => postData.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);



  const createPost = (newPost) => {
    setPostData([newPost, ...postData])
  }

  const removePost = (post) => {
    setPostData(postData.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} remove={removePost} />
      <hr style={{ "margin": "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} post={sortedAndSearchedPosts} />
      {/* <Counter /> */}
      {/* <ClassCounter/> */}
      {/* <LiveInput/> */}
    </div>
  );
}

export default App;
