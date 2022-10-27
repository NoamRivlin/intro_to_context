import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/nav/NavBar";
import BlogCardsContainer from "./components/blog/BlogCardsContainer";

function App() {
  return (
    <>
      <NavBar />
      <BlogCardsContainer />
    </>
  );
}

export default App;
