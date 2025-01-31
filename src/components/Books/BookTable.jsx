/* eslint-disable react/prop-types */
import { BookTableBody } from "./BookTableBody";
import { BookTableFooter } from "./BookTableFooter";
import { BookTableHeader } from "./BookTableHeader";

export const BookTable = ({ books }) => {
  console.log("Table is rendered");
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <BookTableHeader
          columnName={[
            "Title",
            "Quantity",
            "ISBN",
            "AuthorName",
            "PublishedDate",
            "Image",
          ]}
        />
        <BookTableBody books={books.data}  columnName={[
            "title",
            "quantity",
            "isbn",
            "authorName",
            "publishedDate",
            "bookImage"
          ]}/>
          <BookTableFooter totalPage={books.totalPage} pageNumber={books.pageNumber} />
      </table>
    </div>
  );
};
