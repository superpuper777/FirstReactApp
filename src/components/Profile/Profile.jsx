import React from "react";
// import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://99px.ru/sstorage/53/2011/11/tmb_27366_8776.jpg"
          alt="main_pict"
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsLChIzdqWw11L-VBXon0R9vk3ELc4pmF6bwd8KMHXzYuTtLBYA&s"
          alt="user_logo"
        />
        description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
