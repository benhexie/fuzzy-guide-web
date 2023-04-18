import React from "react";
import { Link } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import logo from "../assets/logo/logo32.png";

function Nav() {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.logoContainer}>
        <img src={logo} alt="" style={styles.logo} />
        <h5>Fuzzy Guide</h5>
      </Link>
      <Link className="front-nav-btn active-stretch">GET ACTIVATION KEY</Link>
      <Link className="front-nav-btn front-nav-login-btn active-stretch">
        LOGIN / SIGN UP
      </Link>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: 80,
    backgroundColor: "var(--white)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    position: "fixed",
    top: 0,
    width: "100%",
    maxWidth: 1200,
    zIndex: 999,
    boxShadow: "var(--primary-shadow)",
    gap: 20,
  },
  logoContainer: {
    marginRight: "auto",
    display: "flex",
    gap: 10,
    alignItems: "center",
    color: "var(--primary-color)",
  },
  logo: {
    width: 20,
  },
});

export default Nav;
