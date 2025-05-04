import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { useViewAllBooks } from "../hooks/queries/Book/UseViewAllBooks";
import { BookTable } from "../components/Books/BookTable";
import { UseGetLoggedInUserApi } from "../hooks/queries/UseGetLoggedInUserApi";
import { getRole } from "../utils/Token";
import { BookCard } from "../components/Books/BookCard";


export const Books = () => {
  const { books, isPending, isError, error } = useViewAllBooks();
 const userRole=getRole();
  if (isPending) {
    return <Spinner />;
  }
  console.log("Books from books", books);

  if (isError) {
    console.log(error);
  }
  
  return userRole==="ROLE_LIBRARIAN"?<BookTable books={books} />:<BookCard books={books.data}/>;
};
