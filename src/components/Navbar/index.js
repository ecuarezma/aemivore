import React from "react";
import { Link } from "gatsby";

import * as styles from "./navbar.module.scss";

const Navbar = () => (
  <nav className={styles.Nav}>
    <ul>
      <li>
        <Link>Videos</Link>
      </li>
      <li>
        <Link>Animations</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
