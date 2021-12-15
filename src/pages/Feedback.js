import { useState } from "react";
import firebaseDB from "../firebase";

const Feedback = () => {
  const [data, setData] = useState({
    name: "",
    role: "",
    email: "",
    message: "",
  });
  const { name, role, email, message } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    var dataAdded = await firebaseDB.child("register").push(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Feedback Submitted");
      }
    });
    setData({
      name: "",
      role: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="parent_div">
      <h1 style={{ textAlign: "center" }}>Feedback Form </h1>
      <div className="child_div">
        <form onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <label className="control-label col-sm-2">Name:</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Role:</label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Role"
                name="role"
                value={role}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Message:</label>
            <div className="col-4">
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter Comment/Feedback"
                name="message"
                value={message}
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
      </div>
    </div>
  );
};
export default Feedback;
