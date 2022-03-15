import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Botton from "../Bottom/Botton";
import pic from "../../images/CK.png";
import "./Nav.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={pic} alt="pic" className="pic" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cryptocurrency"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cryptocurrency
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
                News
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Botton buttonStyle="btn--outline">SIGN UP</Botton>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
