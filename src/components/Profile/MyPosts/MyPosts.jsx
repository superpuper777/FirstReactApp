import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "Hi, how are you?", likesCount: 10 },
    { id: 3, message: "It's my first post", likesCount: 7 }
  ];
  return (
    <div className={s.postsBlock}>
      <textarea name="post"></textarea>
      <br />
      <button>Add post</button>
      <button>Remove post</button>

      <div className={s.posts}>
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
        <Post
          message={postsData[2].message}
          likesCount={postsData[2].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
