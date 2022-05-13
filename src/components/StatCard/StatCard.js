import React from "react";
import Card from "../Card/Card";
import styles from './StatCard.module.css'

export default function StatCard({ stats }) {
  const styling = {
    backgroundColor: "#fff",
    height: "288px",
    width: "100%",
    // color: "white"
    // border: "2px solid green",
    borderRadius: "16px",
  };
  return (
    <Card styling={styling}>
        <div className={styles.Header}><h2>Summary</h2></div>
        <div className={styles.Main}>
          {/* <h4>PB: </h4> */}
          <h4>
            Average Distance: <span>{stats.avDist}</span>
          </h4>
          <h4>
            Total Runs: <span>{stats.totRuns}</span>
          </h4>
          <h4>
            Average Pace: <span>{stats.avPace}</span>
          </h4>
          <h4>
            PB(5k): <span>{stats.pb5k}</span>
          </h4>
          <h4>
            PB(10k): <span>{stats.pb10k}</span>
          </h4>
          <h4>PB(half-mrthn): </h4>
        </div>
        <div className={styles.Action}>
            <button>See more</button>
      </div>
    </Card>
  );
}
