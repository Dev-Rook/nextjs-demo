import React from "react";
import Head from "next/head";
import Styles from "../styles/Page-Styles/Page.module.css";

const Contact = () => {
  return (
    <div className={Styles.Page}>
      <Head>
        <title>Demo | Contact</title>
        <meta name="keywords" content="User" />
      </Head>

      <h1>Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
        consequuntur eligendi incidunt rerum odio, voluptatum reiciendis
        officiis aliquid non repellat.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
        consequuntur eligendi incidunt rerum odio, voluptatum reiciendis
        officiis aliquid non repellat.
      </p>
    </div>
  );
};

export default Contact;
