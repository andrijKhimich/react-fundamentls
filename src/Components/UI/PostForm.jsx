import React, {useState} from "react";
import MyInput from "./Input/Input";
import MyBtn from "./Button/Button";

const PostForm = (props) => {

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
      // title: post.title,
      // content: post.content
    }

    // setPostData([newPost, ...postData]);

    props.create(newPost)
    setPost({
      title: "",
      content: "",
    });

  }
  return (
    <form action="#">
      {/* <MyInput onChange={e => setTitle(e.target.value)} value={title} />
         */}
      <MyInput
        type="text"
        placeholder="Post Title"
        onChange={e => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />

      <MyInput
        type="text"
        placeholder="Post Text"
        onChange={e => setPost({ ...post, content: e.target.value })}
        value={post.content}
      />
      <MyBtn btnTitle="Add post" onClick={addNewPost} />
    </form>
  )
}

export default PostForm;