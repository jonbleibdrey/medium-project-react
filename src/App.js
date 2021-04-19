import "./App.css";

function App() {

  const title = "Welcome to new blog"
  const likes = 50;
  const google= "http://www.google.com"
  //const person = {name: "Mr. Man", age: 30}

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times.</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Im in side a p tag woohoo"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={google}> away we go!</a>
      </div>
    </div>
  );
}

export default App;
