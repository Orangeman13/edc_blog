import React from "react";
import s from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={s.allFooter}>
      <div className={s.based}>
        <p className={s.text2022}>© 2022 STON.fi Blog</p>
        <div className={s.baseOn}>
          <p className={s.textBaseOn}>Based on</p>
          <p className={s.ton}>TON</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
