import React from "react";
import { Link } from "react-router-dom";
import Stylesheet from "reactjs-stylesheet";
import { FaPhone, FaEnvelope, FaList } from "react-icons/fa";

function Body() {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h4 style={styles.title}>About Fuzzy Guide</h4>
        <p>
          Fuzzy Guide is a game-changing Chrome extension that revolutionizes
          how you find answers online. With its advanced text recognition and
          natural language processing capabilities, Fuzzy Guide scans your
          screen in real-time, identifies questions within text content, and
          provides accurate answers in seconds. Gone are the days of manually
          searching for answers - Fuzzy Guide empowers you to quickly and
          effortlessly find the information you need, right when you need it.
          Whether you're researching for a project, studying for an exam, or
          simply curious about a topic, Fuzzy Guide is your trusted companion
          for efficient and effective question-solving on the web.
        </p>
      </div>
      <div style={styles.section}>
        <h4 style={styles.title}>CONTACT US</h4>
        <p>
          Have a question, comment, or just want to say hello? We'd love to hear
          from you! Our team is here to provide you with exceptional support and
          assistance. Whether you prefer to drop us an email at our email, give
          us a ring at our phone, or fill out our convenient contact form, we're
          always ready to help. Our goal is to make your experience with us as
          smooth and enjoyable as possible. So go ahead, reach out to us, and
          let's chat! We're looking forward to hearing from you!
        </p>
      </div>
      <div style={styles.contactBtnsContainer}>
        <div className="home-body-btn front-phone-btn active-stretch">
          <p>Phone</p>
          <FaPhone />
        </div>
        <p style={styles.contactOR}>OR</p>
        <div className="home-body-btn front-email-btn active-stretch">
          <p>E-mail</p>
          <FaEnvelope />
        </div>
        <p style={styles.contactOR}>OR</p>
        <div className="home-body-btn front-list-btn active-stretch">
          <p>Google Form</p>
          <FaList />
        </div>
      </div>
      <footer style={styles.footer}>
        <small>
          <Link className="home-front-footer-link" to="terms-and-conditions">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link className="home-front-footer-link" to="privacy-policy">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="home-front-footer-link" to="image-credits">
            Image Credits
          </Link>
        </small>
        <small>Copyright &copy; 2023, Fuzzy Guide. All Rights Reserved.</small>
      </footer>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    width: "100%",
    height: "auto",
    minHeight: "calc(100vh - 30px)",
    backgroundColor: "var(--white)",
    boxShadow: "var(--primary-shadow)",
    padding: 50,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: 150,
    textAlign: "justify",
    gap: 50,
  },
  section: {
    display: "flex",
    flexFlow: "column",
    gap: 20,
  },
  title: {
    textAlign: "center",
  },
  contactBtnsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  contactOR: {
    fontSize: "small",
  },
  footer: {
    marginTop: "auto",
    color: "var(--gray-dark)",
    display: "flex",
    flexFlow: "column",
    gap: 20,
  },
});

export default Body;
