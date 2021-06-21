import React from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1> {title} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>Written By: {blog.author}</h4>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
