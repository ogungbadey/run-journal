import React, { Fragment, useState } from "react";
import Form from "../components/Form/Form";
import DropDown from "../components/HOC/DropDown/DropDown";
import LdBrdItem from "../components/LeaderBoardItem/LdBrdItem";
import RaceCard from "../components/RaceCard/RaceCard";
import StatCard from "../components/StatCard/StatCard";
import { leaderBoard, userStats } from "../fakeData";

export default function Home() {
  const runs = JSON.parse(localStorage.getItem("run-info"));

  const [showDrop, setshowDrop] = useState(false);
  const closeDrop = () => setshowDrop(false);
  const marginStyle = {
    margin: "24px 0",
  };

  const sectionStyle = {
    margin: "16px 0",
  };
  return (
    <Fragment>
      <div style={{textAlign:"center"}}>
        <h3 className="secondary mb-8">
          Welcome to your <em className="tertiary">run journal</em>!
        </h3>
        <h3 className="secondary mb-8">
          Your runs are <em className="tertiary">recorded</em> and <em className="tertiary">analysed</em> to
          help you keep track of your progress.{" "}
        </h3>
        <h3></h3>
      </div>
      <StatCard stats={userStats} />
      <DropDown visible={showDrop} close={closeDrop} children={<Form />} />
      {/* <DropDown/> */}
      <div>
        <div style={sectionStyle}>
          <div style={marginStyle}>
            <h3 className="secondary">Recent Runs</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {runs.slice(-2).map((run, i) => (
              <RaceCard key={i} data={run} />
            ))}
          </div>
        </div>
        <div style={sectionStyle}>
          <div style={marginStyle}>
            <h3 className="secondary">LeaderBoard</h3>
            <div>
              {leaderBoard.map(({ name, pace, distance }, i) => (
                <LdBrdItem
                  key={i}
                  position={i + 1}
                  name={name}
                  pace={pace}
                  distance={distance}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
