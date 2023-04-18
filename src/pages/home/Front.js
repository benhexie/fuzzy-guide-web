import React from "react";
import { Link } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import background from "../../assets/images/front-bg.png";
import { FaDownload, FaYoutube } from "react-icons/fa";

function Front() {
  return (
    <div style={styles.container}>
      <img src={background} alt="" style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.CTATitle}>Get Fuzzy Guide now!</h2>
        <Link
          to="https://google.com/"
          className="home-front-btn bg-white active-stretch"
        >
          <div className="home-front-btn-effect-bg" />
          <p>INSTALL CHROME EXTENSION</p>
          <FaDownload className="home-front-btn-icon" />
        </Link>
        <Link
          to="https://youtube.com/"
          target="_target"
          className="home-front-btn active-stretch"
        >
          <div className="home-front-btn-effect-bg" />
          <p>WATCH DEMO</p>
          <FaYoutube className="home-front-btn-icon" />
        </Link>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    width: "100%",
    height: "50vh",
    backgroundColor: "#C80000",
    color: "white",
    position: "relative",
    boxShadow: "var(--primary-shadow)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    zIndex: 0,
    left: 0,
    top: 0,
  },
  content: {
    display: "flex",
    flexFlow: "column",
    gap: 30,
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  CTATitle: {
    fontWeight: "normal",
  },
});

export default Front;
