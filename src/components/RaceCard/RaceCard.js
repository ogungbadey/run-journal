import React from 'react'
import Card from '../Card/Card'
import styles from './RaceCard.module.css'
import {MdEdit, MdDelete} from 'react-icons/md'

export default function RaceCard({data}) {
  const styling = {
    // backgroundColor: "red",
    width: "calc((100% / 2) - 8px)",
    height: "176px",
    borderRadius: "4px",
    // marginRight: "8px"
  }
  return (
    <Card styling={styling}>
        <div className={styles.Header}><p>{data.runDate}</p></div>
        <div className={styles.Main}>
                <h4>Pace: {data.pace}</h4>
                <h4>Distance: {data.distance}</h4>
        </div>
        <div className={styles.Footer}>
          <span><MdEdit/></span>
          <span><MdDelete/></span>
        </div>
    </Card>
  )
}
