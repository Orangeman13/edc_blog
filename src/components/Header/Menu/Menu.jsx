import React from "react";
import s from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={s.allframe}>
      <img className={s.img} src="./pictures/LogoSTON.svg" alt="LOGO" />
      <p className={s.p}> STON.fi</p>
      <button className={s.button}>
        {" "}
        <img src="./pictures/App.svg" alt="App" /> Go to App{" "}
      </button>
    </div>
  );
};

export default Menu;
