import React from "react";

export default function Card({ styling, children }) {
  const defaultStyle = {
    boxShadow: "0px 2px 10px #252324",
    backgroundColor: "#fff",
    // margin: "16px 0px"
  };

  const styles = { ...defaultStyle, ...styling };
  // const {width, height, backgroundColor} = styling
  return (
    <div style={styles}>
      <div
        style={{
          padding: "4px",
          height: "100%",
          position: "relative",
        }}
      >{children}</div>
    </div>
  );
}
