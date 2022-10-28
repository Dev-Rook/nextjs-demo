import React from "react";
import Head from "next/head";
import Styles from "../styles/Page-Styles/Page.module.css";

const About = () => {
  return (
    <div className={Styles.Page}>
      <Head>
        <title>Demo | About</title>
        <meta name="keywords" content="User" />
      </Head>
      <h1>About</h1>
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

export default About;
