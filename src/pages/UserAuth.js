import React, { useState } from "react";
import { auth } from "../firebase";
import "../App.css";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => alert(err));
  };
  return (
    <div className="parent_div">
      <div className="child_div">
        <form autoComplete="off">
          <h1>ADMIN LOGIN</h1>
          <div className="form-group col-sm-4">
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="Enter Email"
              onChange={changeHandler}
            />
          </div>

          <br />
          <div className="form-group col-sm-4">
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              className="form-control"
              onChange={changeHandler}
            />
          </div>
          <br />
          <button className="btn btn-success" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserAuth;
