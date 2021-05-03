import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
