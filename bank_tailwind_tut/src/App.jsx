import React from "react";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full verflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>NavBar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats buisness Billing Card Detail Test Clients CTA Footer
        </div>
      </div>
    </div>
  );
};

export default App;
