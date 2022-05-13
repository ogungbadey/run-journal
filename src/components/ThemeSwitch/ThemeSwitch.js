import React, { useContext } from 'react'
// import { ThemeContext } from '../../context/ThemeContext'
import styles from './ThemeSwitch.module.css'

export default function ThemeSwitch() {
    // const {theme, toggleSwitch} = useContext(ThemeContext)
    // console.log(theme);
   
    return (
    <label className={styles.Switch} >
        <input type="checkbox" />
        <span className={styles.Slider}></span>
    </label>
  )
}
