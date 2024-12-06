import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import * as styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <a href="mailto:aemivore@gmail.com" id="icon-email">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a
      href="https://aemivore.bandcamp.com/"
      target="noopener"
      id="icon-bandcamp"
    >
      <FontAwesomeIcon icon={faBandcamp} className={styles.bandcampIcon} />
    </a>
  </footer>
);
export default Footer;
