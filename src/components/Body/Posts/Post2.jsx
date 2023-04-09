import React from "react";
import s from "./Post2.module.css";

const Post2 = () => {
  return (
    <div className={s.allframe}>
      <div className={s.textframe}>
        <div className={s.zagtext}>
          <p className={s.text1}>TON Sites and TON Proxy Are Live</p>
        </div>
        <p className={s.text}>
          An important step towards Web 3.0 has been made. Fully decentralised
          sites available are for everyone in usual browsers with TON DNS for
          domain names. TON Sites and TON Proxy are likely to replace current
          solutions and get mass-adoption. STON.fi is glad to see the evolution
          of...
        </p>
      </div>
      <div className={s.pss}>
        <p className={s.ps}>#stonacademy</p>
        <p className={s.tch}>•</p>
        <p className={s.lastread}>1.5 min read</p>
        <p className={s.tch2}>•</p>
        <p className={s.date}>Oct 6</p>
      </div>
    </div>
  );
};

export default Post2;
