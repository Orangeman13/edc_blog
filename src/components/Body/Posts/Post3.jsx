import React from "react";
import s from "./Post3.module.css";

const Post3 = (props) => {
  return (
    <div>
      <div className={s.allframe}>
        <div>
          <p className={s.title}>
            What is the Cross-chain Decentralized Exchange (CDEX)?
          </p>
        </div>
        <div>
          <h className={s.h}>
            The Cross-chain Decentralized Exchange allows participants to use
            one platform to exchange tokens issued on different blockchains via
            the DeFi system, i.e. without third parties that could potentially
            change the transaction course and asset price. Hashbon Rocket or,
            say, O3Swap...
          </h>
        </div>
        <div>
          <h className={s.data}> #stonacademy • 2 min read • Sep 26 </h>
        </div>
      </div>
    </div>
  );
};

export default Post3;
