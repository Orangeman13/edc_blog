import React from "react";
import s from "./Post3.module.css";

const Post3 = (props) => {
  return (
    <div className={s.allFrame}>
      <div className={s.lastQuizText}>
        <div className={s.quizLast}>
          <p className={s.quizText}>
            {" "}
            What is the Cross-chain Decentralized Exchange (CDEX)?
          </p>
        </div>
        <p className={s.textPosta}>
          The Cross-chain Decentralized Exchange allows participants to use one
          platform to exchange tokens issued on different blockchains via the
          DeFi system, i.e. without third parties that could potentially change
          the transaction course and asset price. Hashbon Rocket or, say,
          O3Swap...
        </p>
      </div>
      <div className={s.pss}>
        <p className={s.ps}>#stonacademy</p>
        <p className={s.tch}>•</p>
        <p className={s.lastread}>2 min read</p>
        <p className={s.tch2}>•</p>
        <p className={s.date}>Sep 26</p>
      </div>
    </div>
  );
};

export default Post3;
