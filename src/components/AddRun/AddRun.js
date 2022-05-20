import React from "react";
import {FaRunning} from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";
import styles from './AddRun.module.css'

export default function AddRun() {
  const location = useLocation()
  // console.log(location);
  return (
    <button className={styles.Btn}>
      <Link to="/new-run" state={{backgroundLocation:location}}><FaRunning/></Link>
    </button>
  );
}
