import { useEffect } from "react";
import { useViewAllBooks } from "../../Queries/UseViewAllBooks";
import { BookTable } from "./BookTable";
import { Spinner } from "../Spinner/Spinner";

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
