import React from 'react'

export default function DropDown({ visible=true, close,children}) {
  return (
    visible && <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        opacity: ".95",
        zIndex: "1000"
    }} onClick={close}>{children}</div>
  )
}
