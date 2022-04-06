import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Botton from "../Bottom/Botton";
import "./Nav.css";
import { useUserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { user, logOut } = useUserAuth();

  console.log(user);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

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
            {/* <img src={pic} alt="pic" className="pic" /> */}
            <h4 className="logo">Realcash</h4>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/exchange"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exchange
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/crypto"
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
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log Out
              </Link>
            </li>
          </ul>
          {button && (
            <Botton buttonStyle="btn--outline" onClick={handleLogOut}>
              Log out
            </Botton>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
