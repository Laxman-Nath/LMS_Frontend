/* eslint-disable react/prop-types */
import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";


import { EditDepartmentForm } from "./EditDepartmentForm";
import { useDeleteDept } from "../../hooks/queries/Department/useDeleteDept";
import { DELETE_DEPT } from "../../utils/Routes";
import { EditDeleteButton } from "../EditDeleteButton";

export const DepartmentTableBody = ({ depts, columnNames }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deptToEdit, setDeptToEdit] = useState(null);
  const queryClient = useQueryClient();
  const { deleteDept, isPending, isError, error } = useDeleteDept();
  // const handleEdit = () => {
  //   console.log("I m editing...");

  // };
  const handleModalOpen = (s) => {
    console.log("Student to edit:", s);
    setDeptToEdit(s);
    setIsModalOpen(true);
    // console.log("I m deleting...");
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (dept) => {
    const id = dept.id;

    console.log("Inside handledelete........");
    console.log("id=", id);
    deleteDept({ path: `${DELETE_DEPT}?departmentId=${id}` });
    queryClient.invalidateQueries(["books"]);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <>
      <tbody>
        {depts.map((dept, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
          >
            {columnNames.map((name, index) => (
              <td
                key={index}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {name.includes("Image") ? (
                  <img
                    src={dept[name]}
                    alt="error"
                    className="w-10 h-10 object-cover rounded text-center"
                  />
                ) : (
                  dept[name]
                )}
              </td>
            ))}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center flex flex-row gap-2">
              {dept && (
                <EditDeleteButton
                  name="edit"
                  onClick={() => {
                    handleModalOpen(dept);
                  }}
                />
              )}

              {dept && (
                <EditDeleteButton
                  name="delete"
                  onClick={() => {
                    handleDelete(dept);
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
      {isModalOpen && (
        <Modal onClick={handleModalClose}>
          <EditDepartmentForm onClick={handleModalClose} dept={deptToEdit} />
        </Modal>
      )}
    </>
  );
};
