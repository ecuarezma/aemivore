import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "../../styles/global.css";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
