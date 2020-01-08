import React from "react";

const Profile = () => {
  return (
    <div className="content">
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
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
