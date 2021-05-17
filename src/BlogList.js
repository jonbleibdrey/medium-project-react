import React from "react";

const BlogList = ({blogs}) => {
  return (
    <div className="blog-list">
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

export default BlogList;
