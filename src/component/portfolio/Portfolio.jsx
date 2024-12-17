import { useState } from "react";
import "./portfolio.css";
import { BiMenuAltLeft } from "react-icons/bi";
import {  Link, Outlet } from "react-router-dom";

const Portfolio = () => {
const [bgColor, setBgColor] = useState(1)
    const styles = {
      color: "black",
      textDecoration: "none",
        padding: "6px 19px",
        borderRadius: "15px",
  };
  const handleBg = (value) => {
    setBgColor(value)
  }
  return (
    <>
      <section className="portfolio">
        <article className="heading">
          <h2>My Portfolio</h2>
          <BiMenuAltLeft fontSize="24px" />
        </article>
        <article className="nav">
          <Link
            to="/portfolio"
            style={{
              ...styles,
              background: bgColor === 1 ? "yellow" : null,
              color: bgColor !== 1 ? "white" : null,
            }}
            onClick={() => handleBg(1)}
          >
            All
          </Link>
          <Link
            to="/portfolio/dev"
            style={{
              ...styles,
              background: bgColor === 2 ? "yellow" : null,
              color: bgColor !== 2 ? "white" : null,
            }}
            onClick={() => handleBg(2)}
          >
            Development
          </Link>
          <Link
            to="/portfolio/design"
            style={{
              ...styles,
              background: bgColor === 3 ? "yellow" : null,
              color: bgColor !== 3 ? "white" : null,
            }}
            onClick={() => handleBg(3)}
          >
            Design
          </Link>
        </article>
      </section>
      <Outlet />
    </>
  );
};

export default Portfolio;
