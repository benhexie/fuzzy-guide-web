import React from "react";
import Stylesheet from "reactjs-stylesheet";

function Threads() {
  return (
    <div style={styles.container}>
      {Array(150)
        .fill(false)
        .map((_, i) => {
          return <div key={i} style={styles.thread} />;
        })}
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: 30,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  thread: {
    width: 1,
    height: "100%",
    background:
      "radial-gradient(524.64% 50% at 50% 50%, #FF0000 0%, #D9D9D9 50.52%, #EF5D5D 100%)",
    boxShadow: "var(--primary-shadow)",
  },
});

export default Threads;
