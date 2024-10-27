import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.overallContainer}>
      <div className={styles.usableSpaceContainer}>
        <Header />
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
