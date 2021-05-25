import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>

          <h4>Written By: {blog.author}</h4>

          <button onClick={() => handleDelete(blog.id)}> delete blog </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
