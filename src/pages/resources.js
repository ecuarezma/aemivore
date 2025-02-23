import React from "react";

import Layout from "components/Layout";
import * as styles from "styles/home.module.scss";
import { Link } from "gatsby";
// import aki from "./media/horse/aki/aki_full.mov";

const Home = () => (
  <Layout>
    <div className={styles.container}>
      <ul className={styles.resourceList}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.universalmother.love/"
          >
            Universal Mother
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://slowfactory.earth/donate"
          >
            Slow Factory
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.herbancura.com/"
          >
            Herban Cura
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://okmke.org/">
            Open Kitchen
          </a>
        </li>
      </ul>
      <Link to="/" className={styles.gatsbyLink}>
        Home
      </Link>
    </div>
  </Layout>
);

export default Home;
export const Head = () => <title>Aemi Kato - Resources</title>;
