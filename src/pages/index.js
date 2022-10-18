import React from "react";

import Layout from "../components/layout";
import mirror from "../assets/mirror-hand.mp4";
import horse_running from "../assets/horse/horse-running.mp4";

import * as styles from "../styles/home.module.css";
// import aki from "./media/horse/aki/aki_full.mov";

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <main>
        <h1 className={styles.headerName}>
          AEMI K<span>A</span>TO
        </h1>
      </main>
      <video playsInline autoPlay muted loop className={styles.splashVid}>
        <source src={mirror} type="video/mp4" />
      </video>
      <video playsInline autoPlay muted loop className={styles.horseBg}>
        <source src={horse_running} type="video/mp4" />
      </video>

      {/* <video playsInline autoPlay muted id="aki">
        <source src={aki} type="video/mp4" />
      </video> */}
    </div>
  </Layout>
);

export default Home;
export const Head = () => <title>Aemi Kato</title>;
