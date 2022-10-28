import React from "react";
import Link  from "next/link";
import Styles from "../styles/Nav-Styles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Brand}>User List</div>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.NavItem}>
          <Link href="/" className={Styles.Navlink}>
            Home
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link href="/About" className={Styles.Navlink}>
            About
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link href="/Users" className={Styles.Navlink}>
            User Listing
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link href="/Contact" className={Styles.Navlink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
