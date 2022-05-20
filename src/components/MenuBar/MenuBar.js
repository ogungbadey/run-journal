import React from "react";
import styles from "./MenuBar.module.css";
import { RiUser6Fill, RiHome7Fill, RiBarChartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function MenuBar() {
  return (
    <div className={styles.MenuBar}>
      <div>
        <MenuBarLink to="/" icon={<RiHome7Fill />} />
        <MenuBarLink to="/run" icon={<RiBarChartLine />} />
        <MenuBarLink to="/profile" icon={<RiUser6Fill />} />
        {/* <MenuBarLink to="/history" icon={<RiHistoryFill/>}/> */}
      </div>
    </div>
  );
}

function MenuBarLink({ to, icon }) {
  const { theme } = useTheme();
  const { themeColor } = theme;
  return (
    <div className={styles.MenuBarLink}>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? { color: themeColor["--tertiary"] }
            : { color: themeColor["--secondary"] }
        }
        to={to}
      >
        {icon}
      </NavLink>
    </div>
  );
}
