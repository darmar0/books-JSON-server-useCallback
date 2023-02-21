import { useEffect, useContext } from "react";
import BookCreate from "./components/book-create.component";
import BookList from "./components/book-list.component";
import BookContext from "./context/book.context";

const App = () => {
  const { fetchBooks } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Rading list</h1> <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
