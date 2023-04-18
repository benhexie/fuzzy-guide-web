import React from "react";
import Stylesheet from "reactjs-stylesheet";
import Threads from "../../components/Threads";
import Body from "./Body";
import Front from "./Front";

function Home() {
  return (
    <div style={styles.container}>
      <Threads />
      <Front />
      <Threads />
      <Body />
      <Threads />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    marginTop: 80,
    width: "100%",
  },
});

export default Home;
