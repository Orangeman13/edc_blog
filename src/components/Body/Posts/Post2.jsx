import React from "react";
import s from "./Post2.module.css";

const Post2 = (props) => {
  return (
    <div>
      <div className={s.allframe}>
        <div>
          <p className={s.title}>TON Sites and TON Proxy Are Live</p>
        </div>
        <div>
          <h className={s.h}>
            An important step towards Web 3.0 has been made. Fully decentralised
            sites available are for everyone in usual browsers with TON DNS for
            domain names. TON Sites and TON Proxy are likely to replace current
            solutions and get mass-adoption. STON.fi is glad to see the
            evolution of...
          </h>
        </div>
        <div>
          <h className={s.data}> #stonacademy • 1.5 min read • Oct 6 </h>
        </div>
      </div>
    </div>
  );
};

export default Post2;
