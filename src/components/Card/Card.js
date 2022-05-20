import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from './Card.module.css'
export default function Card({ styling, children }) {
  return (
    <div  className={styles.Card} style={styling}>
      <div
        style={{
          padding: "8px",
          height: "100%",
          position: "relative",
        }}
      >{children}</div>
    </div>
  );
}
