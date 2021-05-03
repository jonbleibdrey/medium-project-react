import React from "react";

const Home = () => {
  

  const handleClick = (event) => {
    console.log("we made it to the click event", event);
  };
  const handleClickAgain = (name) => {
    console.log("welcome to Neverland " + name);
  };
  
 

  return (
    <div className="home">
      <h2>Home page</h2>
      <button onClick={handleClick}> click me </button>
      <button
        onClick={(event) => {
          handleClickAgain(event, "taco hernadez");
        }}
      >
        {" "}
        click me 2
      </button>
    </div>
  );
};

export default Home;
