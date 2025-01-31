import { useMutation } from "@tanstack/react-query";
import { addBookApi } from "../ApisCalls/AddBookApi";
import toast from "react-hot-toast";
import { postApi } from "../ApisCalls/PostApi";

export const UseAddBook = () => {
  const {
    mutate: addBook,
    isPending,
    isError,
  } = useMutation({
    mutationFn: postApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { addBook, isError, isPending };
};
