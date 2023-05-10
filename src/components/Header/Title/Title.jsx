import React from "react";
import s from "./Title.module.css";

const Title = (props) => {
  return (
    <div>
      <p className={s.p1}>STON.fi Blog</p>
      <p className={s.p2}>Updates and announcements from the STON.fi team</p>
    </div>
  );
};

export default Title;
