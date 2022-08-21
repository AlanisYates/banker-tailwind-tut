import React from "react";
import {
  Hero,
  Navbar,
  Billing,
  Button,
  CTA,
  Client,
  CardDeal,
  FeedbackCard,
  Footer,
  GetStarted,
  Testimonial,
  Stats,
  Buisness,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full verflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Buisness />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
