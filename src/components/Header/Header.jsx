import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://dynamic.brandcrowd.com/asset/logo/522494d1-50ee-4316-bbc9-58b1f90bab5e/logo?v=4"
        alt="some value"
      ></img>
    </header>
  );
};

export default Header;
