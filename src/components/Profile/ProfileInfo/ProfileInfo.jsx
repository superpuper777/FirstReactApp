import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.mainPicture}>
        <img
          src="https://99px.ru/sstorage/53/2011/11/tmb_27366_8776.jpg"
          alt="main_pict"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsLChIzdqWw11L-VBXon0R9vk3ELc4pmF6bwd8KMHXzYuTtLBYA&s"
          alt="user_logo"
        />
        description
      </div>
    </div>
  );
};

export default ProfileInfo;
