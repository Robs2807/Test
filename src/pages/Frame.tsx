import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.seite2Parent}>
      <div className={styles.seite2}>Seite 2</div>
    </div>
  );
};

export default Frame;
