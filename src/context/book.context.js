import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    // USING CALLBACK WE PREVENT fetchBooks func to re-render every time.
    const response = await axios.get("http://localhost:3004/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3004/books", { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3004/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3004/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      return book.id === id ? { ...book, ...response.data } : book;
    });
    setBooks(updatedBooks);
  };
  const value = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
export { BookProvider };
export default BookContext;
