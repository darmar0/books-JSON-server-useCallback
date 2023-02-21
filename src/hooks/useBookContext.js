import { useContext } from "react";
import BookContext from "../context/book.context";

export const useBookContext = () => {
  return useContext(BookContext);
};
