import { EditDeleteButton } from "../EditDeleteButton";

// eslint-disable-next-line react/prop-types
export const BorrowedBookTableBody = ({ data, columnNames }) => {
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
                    //   handleDelete(row);
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
