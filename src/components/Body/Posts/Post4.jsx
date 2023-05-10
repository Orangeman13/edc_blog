import React from "react";
import s from "./Post4.module.css";

const Post4 = (props) => {
  return (
    <div>
      <div className={s.allframe}>
        <div>
          <p className={s.title}>Fanzee jettons</p>
        </div>
        <div>
          <h className={s.h}>
            As you remember, the first IDO in the TON ecosystem is coming up
            very soon. In this regard, let us remind you what IDO is and what
            its stages are. IDO (initial dex offering)—is the opportunity to buy
            tokens of the project before its appearance on the decentralized
            exchanges at a fixed price...
          </h>
        </div>
        <div>
          <h className={s.data}> #stonacademy • 1 min read • Sep 20 </h>
        </div>
      </div>
    </div>
  );
};

export default Post4;
