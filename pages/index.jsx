import React from "react";
import Head from "next/head";
import styles from "../styles/Page-Styles/Home/Home.module.css";

const index = () => {
  return (
    <div className={styles.Page}>
      <Head>
        <title>Demo | Home</title>
        <meta name="keywords" content="User" />
      </Head>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum non
        quae ullam nisi consectetur voluptatibus ipsa esse nam beatae quidem!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum non
        quae ullam nisi consectetur voluptatibus ipsa esse nam beatae quidem!
      </p>
    </div>
  );
};

export default index;
