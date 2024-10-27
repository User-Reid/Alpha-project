import styles from "./Body.module.css";
import EduSection from "./EduSection";
import Events from "./Events";

function Body() {
  return (
    <div className={styles.body}>
      <Events />
      <EduSection />
    </div>
  );
}

export default Body;
