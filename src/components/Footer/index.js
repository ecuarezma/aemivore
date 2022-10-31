import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import * as styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <a href="mailto:aemivore@gmail.com" className="icon-email">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a
      href="https://www.instagram.com/aemivore/"
      target="noopener"
      className="icon-insta"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </footer>
);
export default Footer;
