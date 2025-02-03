/* eslint-disable react/prop-types */
import { useState } from "react";
import { EditDeleteButton } from "../../uiutils/EditDeleteButton";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "../../uiutils/Modal";
import { EditStudentForm } from "./EditStudentForm";
import { useDeleteStudent } from "../../Queries/Student/useDeleteStudent";
import { DELETE_STUDENT } from "../../utils/Routes";

export const StudentTableBody=({students,columnNames})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [studentToEdit, setStudentToEdit] = useState(null);
    const queryClient=useQueryClient();
    const { deleteStudent, isPending, isError, error } = useDeleteStudent();
    // const handleEdit = () => {
    //   console.log("I m editing...");
  
    // };
    const handleModalOpen = (s) => {
      console.log("Student to edit:", s);
      setStudentToEdit(s);
      setIsModalOpen(true);
      // console.log("I m deleting...");
    };
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleDelete = (student) => {
      const id = student.id;
  
      console.log("Inside handledelete........");
      console.log("id=", id);
      deleteStudent({ path: `${DELETE_STUDENT}?studentId=${id}` });
      queryClient.invalidateQueries(['books']);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };
    return <>
     <tbody>
            {students.map((student, index) => (
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
                        src={student[name]}
                        alt="error"
                        className="w-10 h-10 object-cover rounded text-center"
                      />
                    ) : (
                      student[name]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center flex flex-row gap-2">
                  {student && (
                    <EditDeleteButton
                      name="edit"
                      onClick={() => {
                        handleModalOpen(student);
                      }}
                    />
                  )}
    
                  {student && (
                    <EditDeleteButton
                      name="delete"
                      onClick={() => {
                        handleDelete(student);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
           {isModalOpen && (
                  <Modal onClick={handleModalClose}>
                    <EditStudentForm onClick={handleModalClose} student={studentToEdit} />
                  </Modal>
                )}
    </>
}