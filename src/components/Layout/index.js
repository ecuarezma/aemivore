import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "../../styles/global.css";
import * as styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
