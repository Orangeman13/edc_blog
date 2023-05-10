import React from "react";
import s from "./Footer.module.css";
import Socials from "./Socials/Socials";
const Footer = () => {
  return (
    <div>
      <p className={s.p}>see more posts</p>
      <p className={s.more}>
        Stay in touch to see feature release, events and announcements
      </p>
      <button className={s.button}>Enter email to subscribe</button>
      <Socials />
    </div>
  );
};

export default Footer;
