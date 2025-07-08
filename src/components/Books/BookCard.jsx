import { useBorrowBook } from "../../hooks/queries/Book/useBorrowBook";
import { useReturnBook } from "../../hooks/queries/Book/useReturnBook";
import { BORROW_BOOK, RETURN_BOOK } from "../../utils/Routes";

/* eslint-disable react/prop-types */
export const BookCard = ({ books }) => {
  console.log("Books inside card", books);
  const { borrowbook, isPending, isError } = useBorrowBook();
  const handleBorrowBook = (bookId) => {
    borrowbook({
      data: bookId,
      path: BORROW_BOOK,
      isLogin: false,
      pageNumber: null,
      method: "POST",
      isQueryParam: true,
      paramString: "bookId",
    });
  };

  const { returnBook, isPending, isError } = useReturnBook();
  const handleReturnBook = (bookId) => {
    returnBook({
      data: bookId,
      path: RETURN_BOOK,
      isLogin: false,
      pageNumber: null,
      method: "POST",
      isQueryParam: true,
      paramString: "bookId",
    });
  };
  return (
    <div className="lg:ml-72 md:ml-50 sm:ml-30 ml-20 overflow-y-auto overflow-x-hidden whitespace-nowrap py-4 ">
      <div className="flex  flex-wrap gap-4 ">
        {books.map((book, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 shrink-0"
          >
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={book.bookImage || "https://via.placeholder.com/300x400"}
                alt={book.title}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  {book.title}
                </p>
                <p className="text-cyan-600 text-sm font-medium">
                  Qty: {book.quantity}
                </p>
              </div>
              <p className="text-slate-600 leading-normal text-sm mb-1">
                ISBN: {book.isbn}
              </p>
              <p className="text-slate-600 leading-normal text-sm mb-1">
                Author: {book.authorName}
              </p>
              <p className="text-slate-600 leading-normal text-sm mb-2">
                Published: {book.publishedDate}
              </p>
              <button
                className={`rounded-md w-full mt-4 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700  ${
                  isPending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-600 hover:bg-red-500 hover:scale-90"
                }`}
                type="button"
                onClick={() => handleBorrowBook(book.id)}
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Adding
                  </span>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
