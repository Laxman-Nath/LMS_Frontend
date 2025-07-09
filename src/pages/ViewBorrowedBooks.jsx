import { useEffect } from "react";
import { Table } from "../components/Table/Table";
import { useGetAllBorrowedBooksOfAuthUser } from "../hooks/queries/Book/useGetAllBorrowedBooksOfAuthUser";
import { Spinner } from "../components/Spinner";

export const ViewBorrowedBooks = () => {
    const {borrowedBooks, isPending, isError }=useGetAllBorrowedBooksOfAuthUser();
    
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
    />
  );
};
