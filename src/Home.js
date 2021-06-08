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
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <h1>useeffect example</h1>
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
