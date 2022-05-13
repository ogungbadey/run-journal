import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import styles from './NavBar.module.css'
export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavItems}>
        <div><h3>Logo</h3></div>
        <div><ThemeSwitch/></div>
      </div>
    </div>
  )
}
