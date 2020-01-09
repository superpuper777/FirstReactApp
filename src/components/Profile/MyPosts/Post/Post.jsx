import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbohRIBmcnkygcaZx6EX07mWEzN4mh1KalytcZpRKvwJbkU06&s"
        alt="user"
      />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
