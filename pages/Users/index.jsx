import React from "react";
import Link from "next/link";
import Styles from "../../styles/Page-Styles/User/User.module.css";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
};

const Index = ({ user }) => {
  return (
    <div className={Styles.Page}>
      <h1>All Users</h1>

      {user &&
        user.map((user) => (
          <div className="" key={user.id}>
            <Link href={`/Users/` + user.id}>
              <h3>{user.name}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Index;
