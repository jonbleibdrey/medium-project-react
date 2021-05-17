import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "baby jesus",
      id: 1,
    },
    {
      title: "We had a party",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "micheal jordan",
      id: 2,
    },
    {
      title: "web dev game",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor ullam iste sint cupiditate suscipit! Asperiores sed nam recusandae quo dicta eius natus corporis tempora sapiente, vero aspernatur quidem error?",
      author: "micheal jordan",
      id: 3,
    },
  ]);

  console.log(setBlogs);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "micheal jordan")}
        title="Micheal's Blog Post"
      />
    </div>
  );
};

export default Home;
