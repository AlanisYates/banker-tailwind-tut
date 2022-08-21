import React from "react";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full verflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>NavBar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>Hero</div>
    </div>
  );
};

export default App;
