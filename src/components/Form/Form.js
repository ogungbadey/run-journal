import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export default function Form({ navTo }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const distance = formData.get("distance");
    const pace = formData.get("pace");
    const runDate = formData.get("run-date");

    setIsLoading(true);
    const runs = JSON.parse(localStorage.getItem("run-info")) || [];

    setTimeout(() => {
      runs.push({ distance, pace, runDate });
      localStorage.setItem("run-info", JSON.stringify(runs));
      setIsLoading(false);
      navigate(navTo);
    }, 3000);
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Enter run details</h3>
        <h4
          style={{ fontSize: "18px", fontWeight: "bolder", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          X
        </h4>
      </div>
      <div className={styles.FormBox}>
        <label>
          <h4>Enter distance (km)</h4>
        </label>
        <input type="number" name="distance" defaultValue={0} />
      </div>
      <div className={styles.FormBox}>
        <label>
          <h4>Enter pace</h4>
        </label>
        <input name="pace" type="text" />
      </div>
      <div className={styles.FormBox}>
        <label>
          <h4>Enter date of race</h4>
        </label>
        <input name="run-date" type="date" />
      </div>
      {/* <div className={styles.FormBox}>
            <label><h4>Take-off Time</h4></label>
            <input name="time" type="date"/>
        </div> */}
      <div className={styles.FormBox}>
        <input type="submit" value={isLoading ? "Submitting..." : "Submit"} />
      </div>
    </form>
  );
}

export function LoginForm({ isLoading, handleSubmit }) {
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div>
        <h3>Login</h3>
      </div>
      <div className={styles.FormBox}>
        {/* <label>Enter name</label> */}
        <input name="username" type="text" placeholder="name" />
      </div>
      <div className={styles.FormBox}>
        {/* <label ></label> */}
        <input name="location" type="text" placeholder="location" />
      </div>
      <div className={styles.FormBox}>
        <input type="submit" value={isLoading ? "Submitting..." : "Submit"} />
      </div>
    </form>
  );
}
