import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Admin = () => {
  return (
    <div className="parent_div">
      <h1 style={{ textAlign: "center" }}>ADMIN LOGIN</h1>
      <div class="child_div">
        <Link to="/Pushnoti">
          <button class="btn btn-primary col-10 btn_div" type="button">
            Notifications
          </button>
        </Link>

        <Link to="/Feed">
          <button class="btn btn-primary col-10 btn_div" type="button">
            Feedback
          </button>
        </Link>
        <button class="btn btn-primary col-10 btn_div" type="button">
          Preparation
        </button>
        <Link to="/Stu_admin">
          <button class="btn btn-primary col-10 btn_div" type="button">
            Student
          </button>
        </Link>
        <button
          class="btn btn-danger col-10 btn_div"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>

      <br />
    </div>
  );
};
export default Admin;
