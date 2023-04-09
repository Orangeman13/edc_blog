import React from "react";
import s from "./buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={s.knopki}>
      <div>
        <button className={s.slip}>All posts</button>
      </div>
      <div>
        <button className={s.slip}>
          <img src="./pictures/4.svg" alt="4" /> Ston Academy
        </button>
      </div>
      <div>
        <button className={s.slip}>
          <img src="./pictures/1.svg" alt="4" /> New jettons
        </button>
      </div>
      <div>
        <button className={s.slip}>
          <img src="./pictures/2.svg" alt="4" /> New features
        </button>
      </div>
      <div>
        <button className={s.slip}>
          <img src="./pictures/3.svg" alt="4" /> Top news
        </button>
      </div>
    </div>
  );
};

export default Buttons;
