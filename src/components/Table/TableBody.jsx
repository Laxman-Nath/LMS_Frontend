import { useQueryClient } from "@tanstack/react-query";
import { EditDeleteButton } from "../EditDeleteButton";
import { useState } from "react";
import { Modal } from "../Modal";

/* eslint-disable react/prop-types */
export const TableBody = ({ data, columnNames, deleteRoute, deleteApi, editForm: EditForm }) => {
  console.log('Edit form inside body:',EditForm);
  console.log("Data inside table", data);
  console.log("Column name inside body", columnNames);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entryToEdit, setEntryToEdit] = useState(null);
  const queryClient = useQueryClient();
  console.log("Delete route inside body", deleteRoute);

  const handleModalOpen = (s) => {
    console.log("Id to edit:", s);
    setEntryToEdit(s);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (dept) => {
    const id = dept.id;
    console.log("Inside handle delete...");
    console.log("id=", id);
    deleteApi({ path: `${deleteRoute}?id=${id}` });
    queryClient.invalidateQueries(["books"]);
  };

  return (
    <>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="hover:bg-slate-50 border-b border-slate-200" key={rowIndex}>
            {columnNames.map((column, colIndex) => (
              <td className="p-4 py-5" key={colIndex}>
                <p className="block font-semibold text-sm text-slate-800">
                  {column.includes("Image") ? (
                    <img
                      src={row[column]}
                      alt="error"
                      className="w-10 h-10 object-cover rounded text-center"
                    />
                  ) : (
                    row[column]
                  )}
                </p>
              </td>
            ))}
            <td className="p-4 py-5">
              <p className="font-semibold text-sm text-slate-800 flex gap-2">
                {row && (
                  <EditDeleteButton
                    name="edit"
                    onClick={() => {
                      handleModalOpen(row);
                    }}
                  />
                )}

                {row && (
                  <EditDeleteButton
                    name="delete"
                    onClick={() => {
                      handleDelete(row);
                    }}
                  />
                )}
              </p>
            </td>
          </tr>
        ))}
      </tbody>

      {isModalOpen && (
        <Modal onClick={handleModalClose}>
          {/* Render the passed editForm component (it will be EditDepartmentForm or any other component passed) */}
          <EditForm onClick={handleModalClose} entry={entryToEdit} />
        </Modal>
      )}
    </>
  );
};
