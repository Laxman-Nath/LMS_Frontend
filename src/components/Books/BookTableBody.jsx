import { useState } from "react";

import { EditDeleteButton } from "../../uiutils/EditDeleteButton";
import { EditBookForm } from "./EditBookForm";
import { Modal } from "../../uiutils/Modal";
import { useSearchParams } from "react-router-dom";


import { DELETE_BOOK } from "../../utils/Routes";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteBook } from "../../Queries/Book/useDeleteBook";

/* eslint-disable react/prop-types */
export const BookTableBody = ({ books, columnName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  const queryClient=useQueryClient();
  const { deleteBook, isPending, isError, error } = useDeleteBook();
  // const handleEdit = () => {
  //   console.log("I m editing...");

  // };
  const handleModalOpen = (b) => {
    console.log("Book to edit:", b);
    setBookToEdit(b);
    setIsModalOpen(true);
    // console.log("I m deleting...");
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (book) => {
    const id = book.id;

    console.log("Inside handledelete........");
    console.log("id=", id);
    deleteBook({ path: `${DELETE_BOOK}?bookId=${id}` });
    queryClient.invalidateQueries(['books']);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  console.log("Books inside table body", books);
  return (
    <>
      <tbody>
        {books.map((book, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
          >
            {columnName.map((name, index) => (
              <td
                key={index}
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {name.includes("Image") ? (
                  <img
                    src={book[name]}
                    alt="error"
                    className="w-10 h-10 object-cover rounded text-center"
                  />
                ) : (
                  book[name]
                )}
              </td>
            ))}
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center flex flex-row gap-2">
              {book && (
                <EditDeleteButton
                  name="edit"
                  onClick={() => {
                    handleModalOpen(book);
                  }}
                />
              )}

              {book && (
                <EditDeleteButton
                  name="delete"
                  onClick={() => {
                    handleDelete(book);
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>

      {isModalOpen && (
        <Modal onClick={handleModalClose}>
          <EditBookForm onClick={handleModalClose} book={bookToEdit} />
        </Modal>
      )}
    </>
  );
};
