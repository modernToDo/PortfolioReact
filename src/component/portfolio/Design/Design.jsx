import "./design.css"
import fr1 from "../../../assets/fornt-end1.jpg"
import fr2 from "../../../assets/front-end2.jpg"
import fr3 from "../../../assets/htmlLap.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";
const imgArray = [fr1, fr2, fr3];
const title = [
  "Eri-Stars",
  "laptop",
  "quizApp",
];
const Design = () => {
    const [hover, setHover] = useState(null)
  return (
    <section className="design">
      {imgArray.map((img, i) => (
        <div
          className="designProject"
          key={i}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <img src={img} />
          {hover === i && (
            <div className="designProjectPath">
              <p>{title[i]}</p>
              <Link
                to=""
                target="_blank"
                className="links"
              >
                visit
              </Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Design