import { useEffect } from "react";
import { Table } from "../components/Table/Table";
import { useGetAllBorrowedBooksOfAuthUser } from "../hooks/queries/Book/useGetAllBorrowedBooksOfAuthUser";
import { Spinner } from "../components/Spinner";
import { useReturnBook } from "../hooks/queries/Book/useReturnBook";

export const ViewBorrowedBooks = () => {
    const {borrowedBooks, isPending, isError }=useGetAllBorrowedBooksOfAuthUser();
    const { returnBook, isPending:isReturnBookPending} = useReturnBook();
 
    if(isPending) return <Spinner/>
    console.log("borrowedbooks:",borrowedBooks);
    
  return (
    <Table
      columnNamesForHead={[
        "BookName",
        "BorrowedDate",
        "Renewal Date",
        "FineAmount",
      ]}
      columnNamesForBody={[
        "title",
        "borrowedDate",
        "renewalDate",
        "fineAmount",
      ]}
      
      data={borrowedBooks}
      isCaseOfBorrowedBooks={true}
      isPending={isReturnBookPending}
      deleteApi={returnBook}
    />
  );
};
