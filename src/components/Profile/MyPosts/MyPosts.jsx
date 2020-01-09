import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea name="post"></textarea>
      <br />
      <button>Add post</button>
      <button>Remove post</button>
      <div>New post</div>
      <div className={s.posts}>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
