/* eslint-disable react/prop-types */
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditDeleteButton } from "../EditDeleteButton";
import { Modal } from "../Modal";

import { useDeleteTeacher } from "../../hooks/queries/Teacher/useDeleteTeacher";
import { DELETE_TEACHER } from "../../utils/Routes";
import { EditTeacherForm } from "./EditTeacherForm";

export const TeacherTableBody=({columnNames,teachers})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teacherToEdit, setTeacherToEdit] = useState(null);
    const queryClient=useQueryClient();
    const{deleteTeacher, isPending, isError, error } = useDeleteTeacher();
    // const handleEdit = () => {
    //   console.log("I m editing...");
  
    // };
    const handleModalOpen = (s) => {
      console.log("Teacher to edit:", s);
      setTeacherToEdit(s);
      setIsModalOpen(true);
      // console.log("I m deleting...");
    };
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleDelete = (teacher) => {
      const id = teacher.id;
  
      console.log("Inside handledelete........");
      console.log("id=", id);
      deleteTeacher({ path: `${DELETE_TEACHER}?teacherId=${id}` });
      
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };
    return <>
     <tbody>
            {teachers.map((teacher, index) => (
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
                        src={teacher[name]}
                        alt="error"
                        className="w-10 h-10 object-cover rounded text-center"
                      />
                    ) : (
                      teacher[name]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center flex flex-row gap-2">
                  {teacher && (
                    <EditDeleteButton
                      name="edit"
                      onClick={() => {
                        handleModalOpen(teacher);
                      }}
                    />
                  )}
    
                  {teacher && (
                    <EditDeleteButton
                      name="delete"
                      onClick={() => {
                        handleDelete(teacher);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
           {isModalOpen && (
                  <Modal onClick={handleModalClose}>
                    <EditTeacherForm onClick={handleModalClose} teacher={teacherToEdit} />
                  </Modal>
                )}
 </>               
}