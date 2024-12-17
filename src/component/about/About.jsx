
import "./About.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import img from "../../assets/backend.png";
const About = () => {
  return (
    <section className="about">
      <article className="title">
        <h2>About Me</h2>
        <BsFillInfoCircleFill />
      </article>
      <article className="history">
        <div>
          <h4 style={{ fontSize: "25px" }}>Back-end Developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quisquam praesentium commodi fugiat consequatur beatae dolores
            tempore ab hic non exercitationem itaque repellendus repellat velit
            veritatis ipsum animi, quia sint rerum laudantium eligendi libero.
            Qui rem obcaecati iste et, repellat vero incidunt accusantium veniam
            optio architecto porro impedit quae nemo.
          </p>
          <h4 className="info">Personal Information</h4>
          <article className="personal-Info">
            <div className="contact">
              <label>
                Name: &nbsp;<span>John Smith</span>
              </label>
              <label>
                Age: &nbsp;<span>69</span>
              </label>
            </div>
            <div className="contact">
              <label>
                Email: &nbsp;<span>John7@gmail.com</span>
              </label>
              <label>
                Address: &nbsp;<span>Eritrea</span>
              </label>
            </div>
              <label>
                Contact-No: &nbsp;<span>002917985361</span>
              </label>
          </article>
        </div>
        <img src={img}  />
      </article>
    </section>
  );
};

export default About;
