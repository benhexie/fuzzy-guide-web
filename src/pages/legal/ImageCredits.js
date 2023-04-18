import React from "react";
import Stylesheet from "reactjs-stylesheet";
import Threads from "../../components/Threads";

function ImageCredits() {
  return (
    <div style={styles.container}>
      <Threads />
      <div style={styles.content}>Image Credits</div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    marginTop: 80,
  },
  content: {
    backgroundColor: "var(--white)",
    minHeight: "calc(100vh - 110px)",
  },
});

export default ImageCredits;
