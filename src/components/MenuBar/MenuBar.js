import React from "react";
import styles from "./MenuBar.module.css";
import { Link } from "react-router-dom";
import { BiRun } from "react-icons/bi";
import { FaHistory, FaRunning } from "react-icons/fa";
import { RiUser6Fill, RiHome7Fill,RiHistoryFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className={styles.MenuBar}>
      <div>
        <MenuBarLink to="/" icon={<RiHome7Fill /> } />
        <MenuBarLink to="/profile" icon={<RiUser6Fill />} />
        <MenuBarLink to="/run" icon={<FaRunning />} />
        <MenuBarLink to="/history" icon={<RiHistoryFill/>}/>
      </div>
    </div>
  );
}

function MenuBarLink({ to,icon }) {
  return (
    <div className={styles.MenuBarLink}>
      <NavLink style={({isActive}) => isActive? {color:"greenyellow"} : {color:"white"}} to={to}>{icon}</NavLink>
    </div>
  );
}
