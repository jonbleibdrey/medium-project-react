import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
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

  console.log(setBlogs);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            <h4>Written By: {blog.author}</h4>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
