import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="grid-container">
      <div>
        <Link to="/Student">
          <button>STUDENT</button>
        </Link>
      </div>
      <div>
        <Link to="/Latest">
          <button>LATEST</button>
        </Link>
      </div>
      <div>
        <Link to="/Preparation">
          <button>PREPARATION</button>
        </Link>
      </div>
      <div>
        <Link to="/Feedback">
          <button>Feedback/Review</button>
        </Link>
      </div>
      <div>
        <Link to="/Admin">Admin</Link>
      </div>
    </div>
  );
}

export default Nav;
