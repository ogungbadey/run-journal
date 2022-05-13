import React from 'react'
import Card from '../Card/Card'
import styles from './RaceCard.module.css'

export default function RaceCard({data}) {
  const styling = {
    // backgroundColor: "red",
    width: "calc((100% / 3) - 8px)",
    height: "176px",
    borderRadius: "4px",
    // marginRight: "8px"
  }
  return (
    <Card styling={styling}>
        <div className={styles.RaceDate}><p>{data.date}</p></div>
        <div className={styles.RaceDetails}>
            <div>
                <h4>Pace: {data.pace}</h4>
                <h4>Distance: {data.distance}</h4>
            </div>
        </div>
    </Card>
  )
}
