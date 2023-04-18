import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import background from "./assets/images/background.png";
import Stylesheet from "reactjs-stylesheet";

function App() {
  return (
    <div className="App" style={styles.backgroundContainer}>
      <img src={background} alt="" style={styles.background} />
      <div style={styles.container}>
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  backgroundContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: 1200,
  },
  background: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
