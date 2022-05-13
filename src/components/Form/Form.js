import React from 'react'
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.Form}>
        <div className={styles.FormBox}>
            <label><h4>Enter distance (km)</h4></label>
            <input type="number" value="0"/>
        </div>
        <div className={styles.FormBox}>
            <label><h4>Enter pace</h4></label>
            <input type="text"/>
        </div>
        <div className={styles.FormBox}>
            <label><h4>Enter date of race</h4></label>
            <input type="date"/>
        </div>
        <div className={styles.FormBox}>
            <label><h4>Take-off Time</h4></label>
            <input type="date"/>
        </div>
        <div className={styles.FormBox}>
            <input type="submit" style={{backgroundColor: "white"}}/>
        </div>
    </form>
  )
}
