import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { useViewAllBooks } from "../hooks/queries/Book/UseViewAllBooks";
import { BookTable } from "../components/Books/BookTable";


export const Books = () => {
  const { books, isPending, isError, error } = useViewAllBooks();
  if (isPending) {
    return <Spinner />;
  }
  console.log("Books from books", books);

  if (isError) {
    console.log(error);
  }
  
  return <BookTable books={books} />;
};
