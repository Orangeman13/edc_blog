import React from "react";
import s from "./Post1.module.css";

const Post1 = (props) => {
  return (
    <div>
      <div className={s.p}>
        <p>LATEST POST</p>
      </div>
      <div className={s.allframe}>
        <div>
          <div>
            <p className={s.title}>Quiz from STON.fi</p>
          </div>
          <div>
            <h className={s.h}>
              Dear users, our bot has opened a Quiz section where you can test
              your knowledge about TON and crypto in general by answering 10
              questions. To start, enter /quiz in the bot or choose the
              appropriate menu item. All questions are based on #stonacademy
              materials. Those who succe...
            </h>
          </div>
          <div>
            <h className={s.data}> #stonacademy • 2 min read • Oct 6 </h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post1;
