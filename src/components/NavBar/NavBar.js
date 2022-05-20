import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import AuthStatus from '../AuthStatus/AuthStatus'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import styles from './NavBar.module.css'
export default function NavBar() {
  const location = useLocation()
  const {theme} = useTheme()
  const {themeColor} = theme
  console.log(theme);
  return (
    <div className={styles.NavBar} style={{
      // backgroundColor: themeColor.primary
      ...themeColor
    }}>
      <div className={styles.NavItems}>
        <div><h2>Logo</h2></div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <AuthStatus/>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}
