import BookShow from "./book-show.component";
import { useBookContext } from "../hooks/useBookContext";

const BookList = () => {
  const { books } = useBookContext();
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
