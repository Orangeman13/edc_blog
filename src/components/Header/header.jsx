import React from "react";
import s from "./header.module.css";
import Buttons from "./Buttons/buttons";

const Header = (props) => {
  return (
    <div className={s.background}>
      <p className={s.zagolovok}>STON.fi Blog</p>
      <p className={s.podzagolovok}>
        Updates and announcements from the STON.fi team
      </p>
      <div>
        <img className={s.logo} src="./pictures/logo.svg" alt="logo" />
        <button className={s.appstore}>
          <img src="./pictures/Union.svg" alt="app" /> Go to APP
        </button>
      </div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default Header;
