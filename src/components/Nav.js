import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="d-grid gap-2 mx-auto parent_div">
      <div className="child_div">
        <center>
          <div>
            <Link to="/Student">
              <button class="btn btn-secondary btn-lg col-5 main_btn">
                STUDENT
              </button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/Latest">
              <button class="btn btn-secondary btn-lg col-5">LATEST</button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/Preparation">
              <button class="btn btn-secondary btn-lg col-5">
                PREPARATION
              </button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/Feedback">
              <button class="btn btn-secondary btn-lg col-5">
                Feedback/Review
              </button>
            </Link>
          </div>
          <br />
          <div>
            <Link to="/Loginpage">Admin</Link>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Nav;
