import React from "react";
import Menu from "./Menu/Menu";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.allframe}>
      <Menu />
      <Title />
      <Buttons />
    </div>
  );
};

export default Header;
