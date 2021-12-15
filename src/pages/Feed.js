import firebaseDB from "../firebase";
import { useState, useEffect } from "react";
//import { useHistory } from "react-router";

const Feed = () => {
  //let history = useHistory();
  const [getData, setGetData] = useState({});
  useEffect(() => {
    firebaseDB.child(`register`).on("value", (details) => {
      console.log(details.val());
      setGetData(details.val());
    });
  }, []);
  const deleteHandler = (key) => {
    firebaseDB.child(`register/${key}`).remove((err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <div className="parent_div">
      <h1>FEED PAGE</h1>
      <div className="mx-auto child_div">
        {getData &&
          //Object.keys(getData).map(key => console.log(getData[key].name or .email))
          Object.keys(getData).map((key) => (
            <div className="border">
              <p>
                <b>Name</b>:{getData[key].name}
              </p>
              <p>
                <b>Role</b>:{getData[key].role}
              </p>
              <p>
                <b>Email</b> :{getData[key].email}
              </p>
              <p>
                <b>Message</b> :{getData[key].message}
              </p>
              {/* <button className="btn btn-success">Update</button> */}
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(key)}
              >
                Delete
              </button>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feed;
