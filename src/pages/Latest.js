import firebaseDB from "../firebase";
import { useState, useEffect } from "react";
import "../App.css";

function Latest() {
  const currDate = new Date().toLocaleDateString();
  const [getData, setGetData] = useState({});
  useEffect(() => {
    firebaseDB.child(`notification`).on("value", (details) => {
      setGetData(details.val());
    });
  }, []);
  return (
    <div className="parent_div">
      <h2>LATEST NOTIFICATIONS</h2>
      <div className="child_div">
        <center>
          <div className="card col-10">
            {getData &&
              Object.keys(getData).map((key) => (
                <div className="border">
                  <p>{currDate}</p>
                  <p>{getData[key].notification}</p>
                  <a href={getData[key].url} target="_blank" rel="">
                    {getData[key].url}
                  </a>
                </div>
              ))}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Latest;
