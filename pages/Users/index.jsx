import React from "react";
import Styles from "../../styles/Page-Styles/User/User.module.css";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data)
  return {
    props: {
      user: data,
    },
  };
};

const Index = ({user}) => {
  return <div className={Styles.Page}>
    <h1>All Users</h1>

    {user && user.map(user => (
      <div className="" key={user.id}>
        <h3>{user.name}</h3>
      </div>
    ))}
  </div>;
};

export default Index;
