import React from "react";
import s from "./Post4.module.css";

const Post4 = (props) => {
  return (
    <div className={s.allFrame}>
      <div className={s.lastQuizText}>
        <div className={s.quizLast}>
          <p className={s.quizText}> Fanzee jettons</p>
        </div>
        <p className={s.textPosta}>
          As you remember, the first IDO in the TON ecosystem is coming up very
          soon. In this regard, let us remind you what IDO is and what its
          stages are. IDO (initial dex offering)—is the opportunity to buy
          tokens of the project before its appearance on the decentralized
          exchanges at a fixed price...
        </p>
      </div>
      <div className={s.pss}>
        <p className={s.ps}>#stonacademy</p>
        <p className={s.tch}>•</p>
        <p className={s.lastread}>1 min read</p>
        <p className={s.tch2}>•</p>
        <p className={s.date}>Sep 20</p>
      </div>
    </div>
  );
};

export default Post4;
