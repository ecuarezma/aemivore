import React from "react";
import Footer from "../Footer";

import "../../styles/global.css";

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
