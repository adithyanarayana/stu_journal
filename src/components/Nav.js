import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="grid-container">
      <div>
        <Link to="/gpa">
          <button>GPA</button>
        </Link>
      </div>
      <div>
        <Link to="/fees">
          <button>FEES</button>
        </Link>
      </div>
      <div>
        <Link to="/library">
          <button>LIBRARY</button>
        </Link>
      </div>
      <div>
        <Link to="/Notes">
          <button>NOTES</button>
        </Link>
      </div>
      <div>
        <Link to="/Todo">
          <button>TO-DO LIST</button>
        </Link>
      </div>
      <div>
        <Link to="/Preparation">
          <button>PREPARATION</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
