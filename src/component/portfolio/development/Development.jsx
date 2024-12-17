import OnlineBanking from "../../../assets/bankLogo.jpeg";
import laptop from "../../../assets/laptop.jpg";
import quizApp from "../../../assets/quizappLogo.jpg";
import tictactoe from "../../../assets/tictacLogo.jpeg";
import weatherApp from "../../../assets/weatherLogo.avif";
import todoApp from "../../../assets/todoLogo.jpg";
import "./development.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const images = [OnlineBanking, laptop, quizApp, tictactoe, weatherApp, todoApp];
const title = [
  "OnlineBanking",
  "laptop",
  "quizApp",
  "tictactoe",
  "weatherApp",
  "todoApp",
];
const links = [
  "BINHOM2024/RSY",
  "laptop",
  "modernToDo/Quiz-App",
  "modernToDo/Tiktactoe",
  "modernToDo/WeatherReactApp",
  "modernToDo/ModernToDoReact"
];
const Development = () => {
  const [hover, setHover] = useState(null);
  return (
    <section className="development">
      {images.map((img, i) => (
        <div
          className="project"
          key={i}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <img src={img} />
          {hover === i && (
            <div className="projectPath">
              <p>{title[i]}</p>
              <Link to={`https://github.com/${links[i]}`} target="_blank" className="link">visit</Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Development;
