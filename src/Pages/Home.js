import React, { Fragment, useState } from "react";
import Form from "../components/Form/Form";
import DropDown from "../components/HOC/DropDown/DropDown";
import LdBrdItem from "../components/LeaderBoardItem/LdBrdItem";
import RaceCard from "../components/RaceCard/RaceCard";
import StatCard from "../components/StatCard/StatCard";
import { leaderBoard, runData, userStats } from "../fakeData";

export default function Home() {
  const [showDrop, setshowDrop] = useState(false);
  const closeDrop = () => setshowDrop(false);
  const marginStyle = {
    margin: "8px 0",
  };

  const sectionStyle = {
      margin: "16px 0"
  }
  return (
    <Fragment>
      <StatCard stats={userStats} />

      {/* <div>
      <h3 style={marginStyle}>Add run to journal</h3>
      <button onClick={() => setshowDrop(true)}>Add</button>
    </div> */}
      <DropDown visible={showDrop} close={closeDrop} children={<Form />} />
      {/* <DropDown/> */}
      <div>
        <div style={sectionStyle}>
          <div style={marginStyle}>
            <h3>Recent Runs</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {runData.map((race, i) => (
              <RaceCard key={i} data={race} />
            ))}
          </div>
        </div>
        <div style={sectionStyle}>
            <div>
                <h3>LeaderBoard</h3>
                <div >
                    {leaderBoard.map(({name, pace, distance}, i) => <LdBrdItem key={i} position={i+1} name={name} pace={pace} distance={distance}/>)}
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
