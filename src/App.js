import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
