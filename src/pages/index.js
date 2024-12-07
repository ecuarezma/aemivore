import React from "react";

import Layout from "components/Layout";
import mirror from "assets/mirror-hand.mp4";
import horse_running from "assets/horse/horse-running.mp4";
import * as styles from "styles/home.module.scss";
// import aki from "./media/horse/aki/aki_full.mov";

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <header>
        <h1>
          AEMI K<span>A</span>TO
        </h1>
      </header>
      <video playsInline autoPlay muted loop className={styles.splashVid}>
        <source src={mirror} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop className={styles.horseBg}>
        <source src={horse_running} type="video/mp4" />
      </video>
    </div>
  </Layout>
);

export default Home;
export const Head = () => <title>Aemi Kato</title>;
