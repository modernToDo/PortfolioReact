
import "./resume.css";
import { FaBlackTie } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";

const Resume = () => {
  return (
    <section className="resume">
      <article className="heading">
        <h2>My Resume</h2>
        <FaBlackTie fontSize="24px" />
      </article>
      <div className="working-exp">
        <article className="experience ">
          <h4>Experience</h4>
          <div className="work">
            <p>Consultant Miami</p>
            <p>User Experiences,Visual Design</p>
            <p>2000-present</p>
          </div>
          <div className="work">
            <p>Senior Consultant London,UK</p>
            <p>User Experiences,Visual Design</p>
            <p>2000-present</p>
          </div>
        </article>
        <article className="experience">
          <h4>Education</h4>
          <div className="work">
            <p>Consultant Miami</p>
            <p>User Experiences,Visual Design</p>
            <p>2000-present</p>
          </div>
          <div className="work">
            <p>Senior Consultant London,UK</p>
            <p>User Experiences,Visual Design</p>
            <p>2000-present</p>
          </div>
        </article>
      </div>
      <aside className="aside left">
        <p className="para"></p>
        <div className="icons">
          <IoBagSharp fontSize="22px" />
        </div>
        <p className="par"></p>
        <div className="icons">
          <IoBagSharp fontSize="22px" />
        </div>
        <p className="par"></p>
      </aside>
      <aside className="aside right">
        <p className="para"></p>
        <div className="icons">
          <IoBagSharp fontSize="22px" />
        </div>
        <p className="par"></p>
        <div className="icons">
          <IoBagSharp fontSize="22px" />
        </div>
        <p className="par"></p>
      </aside>
    </section>
  );
};

export default Resume;
