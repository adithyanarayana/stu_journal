import { useState } from "react";
import firebaseDB from "../firebase";
import "../App.css";

const Pushnoti = () => {
  const [data, setData] = useState({
    url: "",
    notification: "",
  });
  const { url, notification } = { ...data };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    var dataAdded = await firebaseDB.child("notification").push(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Notification Sent");
      }
    });
    setData({
      url: "",
      notification: "",
    });
  };
  return (
    <div className="parent_div">
      <form
        className="center child_div"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <div>
          <label className="control-label ">Enter New Notification:</label>
          <div className="col-sm-4">
            <input
              type="url"
              className="form-control"
              value={url}
              name="url"
              placeholder="Enter Url"
              onChange={changeHandler}
            />
          </div>
          <div className="col-sm-4">
            <textarea
              type="text"
              className="form-control"
              value={notification}
              placeholder="Enter Latest Notification"
              name="notification"
              onChange={changeHandler}
            />
          </div>
          <div>
            <input type="submit" className="btn btn-success" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Pushnoti;
