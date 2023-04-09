import React from "react";
import s from "./Post1.module.css";

const Post1 = (props) => {
  return (
    <div className={s.allFrame}>
      <div className={s.lastQuizText}>
        <div className={s.quizLast}>
          <div className={s.lastImg}>
            <p className={s.lastetsText}>LATEST POST</p>
          </div>
          <p className={s.quizText}> Quiz from STON.fi</p>
        </div>
        <p className={s.textPosta}>
          Dear users, our bot has opened a Quiz section where you can test your
          knowledge about TON and crypto in general by answering 10 questions.
          To start, enter /quiz in the bot or choose the appropriate menu item.
          All questions are based on #stonacademy materials. Those who succe...
        </p>
      </div>
      <div className={s.pss}>
        <p className={s.ps}>#stonacademy</p>
        <p className={s.tch}>•</p>
        <p className={s.lastread}>2 min read</p>
        <p className={s.tch2}>•</p>
        <p className={s.date}>Oct 6</p>
      </div>
    </div>
  );
};

export default Post1;
