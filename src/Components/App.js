import "./App.css";
import BookList from "./BookList/BookList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 h-100">
        <BookList />
      </div>
    </>
  );
}

export default App;
