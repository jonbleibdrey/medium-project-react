import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jonathan");

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label> Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
        <label> Blog author:</label>
        <select vlaue={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Jonathan"> jonathan</option>
          <option value="Micheal"> Micheal</option>
          <option value="yoda"> Baby Yoda</option>
        </select>
        <button> Add Blog</button>
      </form>
      <div>
      <h1> Title: {title} </h1>
      <h2>  Body: {body} </h2>
      <h4> Authors name: {author} </h4>
      </div>
    </div>
  );
};

export default Create;
