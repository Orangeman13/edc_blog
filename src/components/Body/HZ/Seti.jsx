import React from "react";
import s from "./Seti.module.css";

const Seti = () => {
  return (
    <div className={s.all}>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/tglogo.svg" alt="tg" />
        </div>
        <p className={s.tg}>Chanel</p>
      </div>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/chat.svg" alt="tg" />
        </div>
        <p className={s.chat}>Chat</p>
      </div>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/twitter.svg" alt="tg" />
        </div>
        <p className={s.tw}>Twitter</p>
      </div>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/github.svg" alt="tg" />
        </div>
        <p className={s.gt}> Github</p>
      </div>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/discord.svg" alt="tg" />
        </div>
        <p className={s.dc}>Discord</p>
      </div>
      <div className={s.tgframe}>
        <div className={s.tgframe2}>
          <img className={s.tglogo} src="./pictures/reddit.svg" alt="tg" />
        </div>
        <p className={s.rt}>Reddit</p>
      </div>
    </div>
  );
};

export default Seti;
