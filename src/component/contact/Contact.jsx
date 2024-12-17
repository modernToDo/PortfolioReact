
import { RiContactsFill } from "react-icons/ri";
import './contact.css'
function Contact() {
  return (
    <div className="contact">
      <div className="heading">
        <h2>Contact Me</h2>
        <RiContactsFill fontSize="21px" />
      </div>
      <section>
        <h4>LET'S TALK</h4>
        <article>
          <div className="login">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="desc">
            <textarea placeholder="Description" />
            <button>Submit</button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Contact