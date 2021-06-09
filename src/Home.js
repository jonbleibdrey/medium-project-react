import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("jonathan bleibdrey");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
 
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
      <h1>use Effect example</h1>
      <button onClick={() => setName("mr. jonathan bleibdrey")}>
        change name
      </button>
      <p>{name}</p>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "micheal jordan")}
        title="Micheal's Blog Post"
      /> */}
    </div>
  );
};

export default Home;
