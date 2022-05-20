import React from 'react'
import { useTheme } from '../../context/ThemeContext'
// import { ThemeContext } from '../../context/ThemeContext'
import styles from './ThemeSwitch.module.css'

export default function ThemeSwitch() {
    const {theme, toggleSwitch} = useTheme()
   
    return (
    <label className={styles.Switch}>
        <input type="checkbox" onClick={toggleSwitch}/>
        <span className={styles.Slider}></span>
    </label>
  )
}
