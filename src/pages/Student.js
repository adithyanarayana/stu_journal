import firebaseDB from "../firebase";
import { useState, useEffect } from "react";
function Gpa() {
  const [getData, setGetData] = useState({});
  useEffect(() => {
    firebaseDB.child(`student`).on("value", (details) => {
      console.log(details.val());
      setGetData(details.val());
    });
  }, []);

  const [data, setData] = useState({
    studentid: "",
    dob: "",
  });
  const { studentid, dob } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="parent_div">
      <h1>Enter Student Details</h1>

      <div className="mx-auto child_div">
        <center>
          <form autoComplete="off">
            <div className="form-group col-sm-4">
              <input
                type="text"
                name="studentid"
                className="form-control"
                value={studentid}
                placeholder="Enter Student ID"
                onChange={changeHandler}
              />
            </div>

            <br />
            <div className="form-group col-sm-4">
              <input
                type="date"
                name="dob"
                value={dob}
                placeholder="Enter DOB"
                className="form-control"
                onChange={changeHandler}
              />
            </div>
            <br />
            <button className="btn btn-success">submit</button>
          </form>
        </center>
        {getData &&
          //Object.keys(getData).map(key => console.log(getData[key].name or .email))
          Object.keys(getData).map((key) => (
            <div className="border1">
              <p>
                <b>Name</b>:{getData[key].role}
              </p>
              <p>
                <b>Role</b>:{getData[key].mid1}
              </p>
              <p>
                <b>Email</b> :{getData[key].cgpa}
              </p>
              <p>
                <b>Message</b> :{getData[key].dob}
              </p>

              <br />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Gpa;
