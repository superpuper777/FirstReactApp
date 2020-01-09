import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://99px.ru/sstorage/53/2011/11/tmb_27366_8776.jpg"
          alt="main_pict"
        />
      </div>
      <div>
        {/* <img
            src="https://m.io.ua/img_aa/medium/1711/49/17114958.jpg"
            alt="user_logo"
          /> */}
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
