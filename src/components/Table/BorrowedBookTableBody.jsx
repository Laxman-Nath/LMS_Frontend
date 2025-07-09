import { RETURN_BOOK } from "../../utils/Routes";
import { EditDeleteButton } from "../EditDeleteButton";

// eslint-disable-next-line react/prop-types
export const BorrowedBookTableBody = ({ data, columnNames,deleteApi,isPending }) => {
   const handleReturnBook = (bookId) => {
    console.log("bookid",bookId);
      deleteApi({
        data: bookId,
        path: RETURN_BOOK,
        isLogin: false,
        pageNumber: null,
        method: "PUT",
        isQueryParam: true,
        paramString: "bookId",
      });
    };
  console.log("Borrowebook inside body:", data);
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          className="hover:bg-slate-50 border-b border-slate-200"
          key={rowIndex}
        >
          {columnNames.map((column, colIndex) => (
            <td className="p-4 py-5" key={colIndex}>
              <p className="block font-semibold text-sm text-slate-800">
                {column === "fineAmount" && row[column] === null
                  ? 0
                  : row[column]}
              </p>
            </td>
          ))}
          <td className="p-4 py-5">
            <p className="font-semibold text-sm text-slate-800 flex gap-2">
              {row && (
                <EditDeleteButton
                  name="return"
                  onClick={() => {
                      // eslint-disable-next-line react/prop-types
                      handleReturnBook(row?.bookId);
                  }}
                />
              )}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
