import { useEffect } from "react";
import { BookTable } from "./BookTable";
import { Spinner } from "../../uiutils/Spinner";
import { useViewAllBooks } from "../../Queries/Book/UseViewAllBooks";

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
