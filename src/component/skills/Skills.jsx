
import { GiSkills } from "react-icons/gi";
import "./skills.css";
const Skills = () => {
  return (
    <section className="skills">
      <div>
        <h2>My Skills</h2>
        <GiSkills fontSize={"25px"} style={{paddingRight:"15px"}}/>
      </div>
      <div className="course">
        <article className="front-end">
          <h4>FRONT-END</h4>
          <span>HTML</span>
          <div className="range html">
            <p></p>
          </div>
          <span>CSS</span>
          <div className="range css">
            <p></p>
          </div>
          <span>JAVASCRIPT</span>
          <div className="range js">
            <p></p>
          </div>
          <span>REACT JS</span>
          <div className="range react">
            <p></p>
          </div>
        </article>
        <article className="back-end">
          <h4>BACK-END</h4>
          <span>JAVASCRIPT</span>
          <div className="range js">
            <p></p>
          </div>
          <span>NODE JS</span>
          <div className="range node">
            <p></p>
          </div>
          <span>EXPRESS JS</span>
          <div className="range express">
            <p></p>
          </div>
        </article>
        <article className="databases">
          <h4>DATABASES</h4>
          <span>MONGODB</span>
          <div className="range mongodb">
            <p></p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
