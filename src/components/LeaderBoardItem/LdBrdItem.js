import React from 'react'
import styles from './LdBrdItem.module.css'

export default function LdBrdItem({position, name, pace, distance}) {
  return (
    <div style={{
        display:"flex",
        // width:"100%",
        height: "64px",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"4px"
    }} className={styles.Item}>
        <div><span>{position}</span></div>
        <div>{name}</div>
        <div>{pace}</div>
        <div>{distance}</div>
    </div>
  )
}
