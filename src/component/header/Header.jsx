import  { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const paths = ["/","/about", "/skills", "/resume", "/portfolio", "/contact"];
  const links = [
    "Home",
    "About Me",
    "Skills",
    "Resume",
    "Portfolio",
    "Contact",
  ];
  return (
    <>
      <div className="header">
        <FaReact fontSize={"70px"} className="logo" />
        <nav>
          <span className="burger">
            <GiHamburgerMenu
              fontSize="40px"
              onClick={() => setShow((current) => !current)}
            />
          </span>
          {(width > 501 || show) && (
            <ul>
              {links.map((link, i) => (
                <Link to={`${paths[i]}`} className="hlink">
                  {link}
                </Link>
              ))}
            </ul>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
