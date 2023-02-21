import { useState } from "react";
import { useBookContext } from "../hooks/useBookContext";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSave = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSave}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
