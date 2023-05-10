import React from "react";
import Post1 from "./Posts/Post1";
import s from "./Body.module.css";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";

const Body = (props) => {
  return (
    <div>
      <p className={s.p}>LATEST POST</p>
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
    </div>
  );
};

export default Body;
