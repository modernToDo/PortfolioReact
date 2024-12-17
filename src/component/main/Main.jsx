
import "./main.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Main() {
  return (
    <div className="main">
      <p>
        Lorem ipsum dolor sit amet. <br /> consectetur adipisicing eli
      </p>
      <div className="media-btns">
        <div className="btns">
          <button>Hire Me</button>
          <button>Download Resume</button>
        </div>
        <div className="mediaicons">
          <FaLinkedin />
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Main;
