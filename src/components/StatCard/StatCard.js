import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Card from "../Card/Card";
import styles from "./StatCard.module.css";

export default function StatCard() {
  const { theme } = useTheme();
  const { themeColor } = theme;
  const styling = {
    // backgroundColor: themeColor.primary,
    height: "256px",
    width: "100%",
    // color: themeColor.secondary,
    // border: "2px solid green",
    borderRadius: "16px",
  };

  const userStats = JSON.parse(localStorage.getItem("run-info"));
  const calcAverage = (type) => {
    return (
      userStats.reduce((acc, curr) => acc + Number(curr[type]), 0) /
      userStats.length
    );
  };
  const avDist = userStats && calcAverage("distance").toFixed(2);
  const avPace = userStats && calcAverage("pace").toFixed(2);
  const totRuns = userStats && userStats.length;

  const stats = { avDist, totRuns, avPace };
  return (
    <Card styling={styling}>
      {!userStats && (
        <div className={styles.NoRun}>
          <p>Add runs to your journal to see your summary</p>
          <div><button><Link to="new-run"/>Add a run</button></div>
        </div>
      )}
      {userStats && (
        <Fragment>
          <div className={styles.Header}>
            <h2>Summary</h2>
          </div>
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
            {/* <h4>
          PB(5k): <span>{stats.pb5k}</span>
        </h4>
        <h4>
          PB(10k): <span>{stats.pb10k}</span>
        </h4> */}
            {/* <h4>PB(half-mrthn): </h4> */}
          </div>
          <div className={styles.Action}>
            <button>See more</button>
          </div>
        </Fragment>
      )}
    </Card>
  );
}
