import React from "react";
import Styles from "../styles/Nav-Styles/Nav.module.css"
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={Styles.Content}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
