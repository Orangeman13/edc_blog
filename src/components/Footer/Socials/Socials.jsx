import React from "react";
import s from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={s.allframe}>
      <button className={s.button}>
        <img src="./pictures/TG.svg" alt="App" />{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Chat.svg" alt="App" />{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Twitter.svg" alt="App" />{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Github.svg" alt="App" />{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Discord.svg" alt="App" />{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Reddit.svg" alt="App" />{" "}
      </button>
      <div className={s.p}>
        <p>Channel</p>
        <p>Chat</p>
        <p>Twitter</p>
        <p>Github</p>
        <p>Discord</p>
        <p>Reddit</p>
      </div>
    </div>
  );
};

export default Socials;
