import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { useViewAllBooks } from "../hooks/queries/Book/useViewAllBooks";
import { getRole } from "../utils/Token";
import { BookCard } from "../components/Books/BookCard";
import { Table } from "../components/Table/Table";
import { DELETE_BOOK } from "../utils/Routes";
import { useDeleteBook } from "../hooks/queries/Book/useDeleteBook";
import { EditBookForm } from "../components/Books/EditBookForm";


export const Books = () => {
  const { books, isPending, isError, error } = useViewAllBooks();
  const { deleteBook, isPending:isDeletePending, isError:isDeleteError, error : deleteError} = useDeleteBook();
 const userRole=getRole();
  if (isPending) {
    return <Spinner />;
  }
  console.log("Books from books", books);

  if (isError) {
    console.log(error);
  }
  
  return userRole==="ROLE_LIBRARIAN"? 
          <Table columnNamesForHead={[
            "Title",
            "Quantity",
            "ISBN",
            "AuthorName",
            "PublishedDate",
            "Image",
          ]} columnNamesForBody={[
            "title",
            "quantity",
            "isbn",
            "authorName",
            "publishedDate",
            "bookImage"
          ]} data={books.data} totalPage={books.totalPage} pageNumber={books.pageNumber}
                      isPending={isDeletePending} deleteApi={deleteBook} deleteRoute={DELETE_BOOK} editForm={EditBookForm} />
          
          :<BookCard books={books.data}/>;
};
