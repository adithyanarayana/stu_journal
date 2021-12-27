import { useState } from "react";
import firebaseDB from "../firebase";

const Stu_admin = () => {
  const [data, setData] = useState({
    role: "",
    dob: "",
    mid1: "",
    mid2: "",
    cgpa: "",
    percentage: "",
    attendence: "",
  });
  const { role, dob, mid1, mid2, cgpa, percentage, attendence } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    var dataAdded = await firebaseDB.child("student").push(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Student Details submitted");
      }
    });
    setData({
      role: "",
      dob: "",
      mid1: "",
      mid2: "",
      cgpa: "",
      percentage: "",
      attendence: "",
    });
  };
  return (
    <div className="parent_div">
      <h1 style={{ textAlign: "center" }}>Student Details </h1>
      <div className="child_div">
        <center>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
              <label className="control-label col-sm-2">Student ID:</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Roll ID"
                  name="role"
                  value={role}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">dob:</label>
              <div className="col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Student DOB"
                  name="dob"
                  value={dob}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">Mid 1 marks:</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mid 1"
                  name="mid1"
                  value={mid1}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">Mid 2 marks:</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mid 2"
                  name="mid2"
                  value={mid2}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">cgpa:</label>
              <div className="col-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Cgpa"
                  name="cgpa"
                  value={cgpa}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">percentage:</label>
              <div className="col-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Percentage"
                  name="percentage"
                  value={percentage}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">attendence:</label>
              <div className="col-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Attendence"
                  name="attendence"
                  value={attendence}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" className="btn btn-success" />
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
};
export default Stu_admin;
