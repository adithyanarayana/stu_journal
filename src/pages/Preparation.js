import Collapsible from "react-collapsible";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function library() {
  return (
    <div className="parent_div">
      <h1>PREPARATION</h1>
      <div className="child_div">
        <div className="sub">
          <Collapsible trigger="AI">
            <a href="https://drive.google.com/file/d/1BYpA7LJjJVSmoI1Lf_DYRLTZBBU6Jn2M/view">
              AI Notes
            </a>
          </Collapsible>
          <Collapsible trigger="BEE">
            <a href="https://drive.google.com/drive/folders/1j0L1RK5K1-NbThKHOkSyESW4YFD8OH1b">
              BEE Notes
            </a>
          </Collapsible>
          <Collapsible trigger="CHEMISTRY">
            <a href="https://drive.google.com/drive/folders/1KcQ0_L7_2jrVVdGuAtsd0-GL563GN2xi">
              CHEMISTRY Notes
            </a>
          </Collapsible>
          <Collapsible trigger="DSP">
            <a href="https://drive.google.com/drive/folders/1-YkUpOh53hMHlopoSTMGZ7oJkoxG94VM">
              DSP Notes
            </a>
          </Collapsible>
          <Collapsible trigger="M2">
            <a href="https://drive.google.com/drive/folders/1WVhRdhEQuqj-qTUVLQQA4T8BWgmombHo">
              M2 Notes
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=Dotzhtecn8I">M2 YOUTUBE</a>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dotzhtecn8I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export default library;
