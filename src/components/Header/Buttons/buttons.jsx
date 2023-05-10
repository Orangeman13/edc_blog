import React from "react";
import s from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={s.allframe}>
      <button className={s.button}> All posts </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Academ.svg" alt="App" /> Ston Academy{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Jett.svg" alt="App" /> New jettons{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/Featur.svg" alt="App" /> New features{" "}
      </button>
      <button className={s.button}>
        {" "}
        <img src="./pictures/News.svg" alt="App" /> Ton news{" "}
      </button>
    </div>
  );
};

export default Buttons;
