import React from 'react'

export default function DropDown({visible, close,children}) {
    console.log(visible);
  return (
    visible && <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "#ccc",
        opacity: ".95",
        zIndex: "1000"
    }} onClick={close}>{children}</div>
  )
}
