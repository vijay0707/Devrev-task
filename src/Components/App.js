import "./App.css";
import BookList from "./BookList/BookList";
import Navbar from "./Extras/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container p-5 align-items-center">
        <BookList />
      </div>
    </>
  );
}

export default App;
