import React from "react";
import Stylesheet from "reactjs-stylesheet";
import Threads from "../../components/Threads";

function TandC() {
  return (
    <div style={styles.container}>
      <Threads />
      <div style={styles.content}>Terms and Conditions</div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    marginTop: 80,
    minHeight: "calc(100vh - 80px)",
    backgroundColor: "var(--white)",
  },
  content: {},
});

export default TandC;
