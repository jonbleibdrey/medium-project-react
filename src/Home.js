import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new webiste",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "baby jesus",
      id: 1,
    },
    {
      title: "We had a party",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "micheal jordan",
      id: 2,
    },
    {
      title: "web dev game",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "madona",
      id: 3,
    },
  ]);

  return <div className="home"></div>;
};

export default Home;
